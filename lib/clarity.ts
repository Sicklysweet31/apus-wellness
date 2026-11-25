// Microsoft Clarity: how visitors use the site (recordings, heatmaps, scroll),
// plus our own events for the actions that bring bookings.
// Clarity runs only on the public site, never on localhost or preview links.
// For EU visitors it sets cookies only after "Accept" (Consent API v2).

export const CLARITY_ID = "zjdz982y39";

export const CLARITY_HOSTS = ["apuswellness.ro", "www.apuswellness.ro"];

export const CONSENT_KEY = "apus-cookies"; // "granted" | "denied", kept in the browser

export const OPEN_COOKIE_SETTINGS = "apus:cookie-settings";

type ClarityFn = ((...args: unknown[]) => void) & { q?: unknown[][] };

declare global {
  interface Window {
    clarity?: ClarityFn;
  }
}

// Clarity's own queue: calls made before its script loads are kept and sent later.
function clarity(...args: unknown[]) {
  if (typeof window === "undefined") return;
  if (!window.clarity) {
    const queue: ClarityFn = (...queued: unknown[]) => {
      (queue.q = queue.q || []).push(queued);
    };
    window.clarity = queue;
  }
  window.clarity(...args);
}

export function track(event: string) {
  clarity("event", event);
}

export function sendConsent(granted: boolean) {
  clarity("consentv2", {
    ad_Storage: "denied", // APUS runs no Microsoft ads
    analytics_Storage: granted ? "granted" : "denied",
  });
}

export const clarityTag = `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${CLARITY_ID}");`;
