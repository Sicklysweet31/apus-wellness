"use client";

import { OPEN_COOKIE_SETTINGS } from "@/lib/clarity";

// Lets a visitor change the cookie choice as easily as they made it.
export default function CookieButton({ className }: { className?: string }) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS))}
    >
      Setări cookie-uri
    </button>
  );
}
