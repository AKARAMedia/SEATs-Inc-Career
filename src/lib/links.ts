// External contact/registration channels, carried over from the live WP site's
// header "Register" button and the WP Social Reviews chat bubble ("Apply Now").
export const TELEGRAM_RECRUIT = "https://t.me/seatsincrecruit";
export const TELEGRAM_HR = "https://t.me/seatsinchr";
export const MESSENGER = "http://m.me/seatsinccambodia";
export const FACEBOOK_PAGE = "https://www.facebook.com/seatsinccambodia";
export const LINKEDIN = "https://www.linkedin.com/company/81613382/admin/";
export const HR_PHONE = "089 777 231";

// Anchor entries use the full "/#id" path (not a bare "#id") since Header renders on every
// route, including the standalone /jobs pages — a bare hash there would just rewrite /jobs's
// own URL fragment instead of navigating back to the merged homepage's section.
export const NAV_ITEMS = [
  { label: "CEO MESSAGE", href: "/#ceo-message" },
  { label: "DESIRED CANDIDATE", href: "/#desired-candidate" },
  { label: "COMPANY INTRO", href: "/#company-intro" },
  // Stays on the one-scroll homepage (not the standalone /jobs search page) — last in the nav.
  { label: "RECRUIT", href: "/#recruit" },
];
