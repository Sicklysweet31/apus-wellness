// One source for the call and WhatsApp links (Mark's number, as in Contact.tsx).
// The WhatsApp message starts with "Am văzut site-ul", so a lead from the site is easy to spot.
const MARK = "40744244255";

export const CALL_HREF = `tel:+${MARK}`;

export const WHATSAPP_HREF =
  `https://wa.me/${MARK}?text=` +
  encodeURIComponent("Am văzut site-ul. Este liber jacuzziul pe data de ");
