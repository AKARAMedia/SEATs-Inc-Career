import type { SocialPost } from "@/components/SocialFeed";

export const HERO = {
  photo: "/media/2026/10/team-photo-hero.jpg",
  title: "Grow Your Career with S.E.A.T.S Inc.",
  text: "We're a Japanese trading company built in Cambodia — a big family of different departments, businesses, and cultures learning and growing together. Come build your career with us.",
};

export const CEO_MESSAGE = {
  photo: "/media/2023/03/ceo-1.jpeg",
  name: "Kosuke Mineshima",
  title: "Director & CEO",
  eyebrow: "Message From Our CEO",
  eyebrowKhmer: "សារពីផ្នែក ធនធានមនុស្ស​!",
  heading: "From Cambodia to the World",
  paragraphs: [
    "Everyone is the same, but those who seek challenges and improvement will always be a step further ahead.",
    "S.E.A.T.S Inc. welcomes anyone ready for a challenge and willing to change for the better. We provide the opportunity to make changes and create something new — it's up to you to decide what you want to hold in the future.",
  ],
  pullQuote: "We will keep generating something new for the happiness of all stakeholders.",
};

export type Interview = { name: string; role: string; photo: string; quote: string };

export const INTERVIEWS: Interview[] = [
  {
    name: "Phatya Seng",
    role: "SALES PROMOTION SUPERVISOR",
    photo: "/media/2026/10/interview-phatya.jpg",
    quote:
      "10 years in, my biggest challenge has been adapting as the company grows: team structures shift, roles blur and workloads rise. It built my problem-solving, communication and ownership. I stay for the chance to grow, take on new responsibilities and help teammates reach their goals.",
  },
  {
    name: "Linda Ny",
    role: "OPERATION CONTROL",
    photo: "/media/2026/10/interview-linda.jpg",
    quote:
      "4.5 years and still going strong. Juggling orders, payments, deliveries and last-minute issues is messy but never boring; it keeps me thinking fast and organized. What keeps me here is the team energy: we support each other, communicate openly and solve problems together.",
  },
  {
    name: "Poch Bunthy",
    role: "GENERAL MANAGER, NOVA MARKETING",
    photo: "/media/2026/10/interview-bunthy.jpg",
    quote:
      "Our visionary General Manager, shaping Nova Marketing's journey since day one. His dedication and leadership are at the heart of our success. Stay tuned for his story.",
  },
  {
    name: "Kazuhiro Okuda",
    role: "GENERAL MANAGER, AGRI-BUSINESS",
    photo: "/media/2026/10/interview-okuda.jpg",
    quote:
      "Our dedicated General Manager in Agri-Business, and a key part of our growth since day one. Stay tuned for his inspiring journey.",
  },
  {
    name: "Long Khema",
    role: "OPERATION CONTROL",
    photo: "/media/2026/10/interns/khema.jpg",
    quote: "A senior Operation Control specialist at S.E.A.T.S Inc. Stay tuned for her story.",
  },
  {
    name: "Raksa",
    role: "SOCIAL MEDIA MANAGER",
    photo: "/media/2026/10/interns/raksa.jpg",
    quote: "Our Social Media Manager at S.E.A.T.S Inc., who has been with us for years. Stay tuned for her story.",
  },
];

// Speech-bubble colours (deep enough for white text) and a slightly different tilt per card
export const BUBBLES = [
  { color: "#0b7f90", clip: "polygon(0 7%, 38% 0, 100% 9%, 97% 100%, 2% 93%)" },
  { color: "#6b3a8a", clip: "polygon(0 4%, 62% 10%, 100% 0, 98% 94%, 3% 100%)" },
  { color: "#1f7a4f", clip: "polygon(2% 0, 100% 8%, 96% 100%, 0 92%)" },
  { color: "#c2570c", clip: "polygon(0 9%, 55% 0, 100% 6%, 97% 100%, 4% 95%)" },
];

export const DOTS = "radial-gradient(currentColor 1.6px, transparent 1.6px)";

export const JAPANESE_INTERNS = [
  { name: "Chinastu Noma", role: "Representative of Sales & Marketing", photo: "/media/2026/10/interns/chitnasu.jpg" },
  { name: "Kirara Ido", role: "Japanese Internship", photo: "/media/2026/10/interns/kirara.jpg" },
  { name: "Saiga Matsumoto", role: "Assistant of Sales & Development", photo: "/media/2026/10/interns/saiga.jpg" },
  { name: "Yusuke Ogushi", role: "Assistant of Sales & Promotion", photo: "/media/2026/10/interns/yusuke.jpg" },
  { name: "Shoko Kawabata", role: "Japanese Internship", photo: "/media/2026/10/interns/shoko.jpg" },
];

export const BENEFITS: { title: string; text: string }[] = [
  {
    title: "Learning & Growth",
    text: "Clear paths to learn new skills and grow your career — we always look first to promote from within.",
  },
  {
    title: "Time Off",
    text: "Paid time off to recharge, spend time with family, and pursue your personal goals.",
  },
  {
    title: "Giving Back",
    text: "We care about our community and support initiatives that give back to Cambodia.",
  },
  {
    title: "Rewards",
    text: "Recognition and rewards for the people who help S.E.A.T.S Inc. grow.",
  },
];

export type GalleryPhoto = { src: string; caption: string };

// Canonical 6 from Work/Company (byte-identical on both pages) plus Team's one unique photo.
export const GALLERY: GalleryPhoto[] = [
  { src: "/media/2026/01/DSC03495-scaled.jpg", caption: "Team Collaboration" },
  { src: "/media/2026/10/gallery/cjcc-fair-mar-2026.webp", caption: "CJCC Career Fair 2026" },
  { src: "/media/2026/10/gallery/cjcc-job-fair-aug-2025.webp", caption: "CJCC Job Fair — Aug 2025" },
  { src: "/media/2026/10/gallery/training.webp", caption: "Team Training Session" },
  { src: "/media/2026/10/gallery/company-party-1.webp", caption: "Company Party" },
  { src: "/media/2026/10/gallery/company-party-2.webp", caption: "Company Party" },
  { src: "/media/2026/10/gallery/cjcc-job-fair-jan-2025.webp", caption: "CJCC Job Fair — Jan 2025" },
];

export const VIDEOS = [
  { title: "Background of CEO & Present [Part 1]", youtubeId: "Q_R6mVwDca0", duration: "0:16", thumbnail: "/media/2022/11/11-1.jpg" },
  { title: "Background of CEO & Present [Part 2]", youtubeId: "vRa66uiD-VA", duration: "0:16", thumbnail: "/media/2022/11/12.jpg" },
  { title: "Study Background of CEO [Part 3]", youtubeId: "v5HZCcwgwAo", duration: "0:16", thumbnail: "/media/2022/11/13.jpg" },
];

export const SOCIAL_POSTS: SocialPost[] = [
  {
    name: "Chinastu Noma",
    headline: "Meet our Japanese intern",
    caption: "Meet Chinastu Noma from Japan, who works as a Representative of Sales & Marketing in the LOKA-MD department.",
    photo: "/media/2026/10/interns/chitnasu.jpg",
    href: "https://www.facebook.com/share/p/1S1mMwFnzb/?mibextid=wwXIfr",
  },
  {
    name: "Kirara Ido",
    headline: "Meet our Japanese intern",
    caption: "Meet Kirara from Japan, currently a 4th-year university student interning with S.E.A.T.S Inc.",
    photo: "/media/2026/10/interns/kirara.jpg",
    href: "https://www.facebook.com/share/p/1KhHoR4A5b/?mibextid=",
  },
  {
    name: "Saiga Matsumoto",
    headline: "Meet our Japanese intern",
    caption: "Meet Saiga Matsumoto from Japan, an inspiring intern at S.E.A.T.S Inc.",
    photo: "/media/2026/10/interns/saiga.jpg",
    href: "https://www.facebook.com/share/p/19sM8hDjjs/?mibextid=wwXIfr",
  },
  {
    name: "Raksa",
    headline: "Meet our Social Media Manager",
    caption: "Meet Raksa, our Social Media Manager at S.E.A.T.S Inc., who has been with us for years.",
    photo: "/media/2026/10/interns/raksa.jpg",
    href: "https://www.facebook.com/photo.php?fbid=1357460016345009&set=pb.100062430709439.-2207520000&type=3",
  },
];

export const JOB_ANNOUNCEMENT_SLUGS = [
  "product-development-agribusiness",
  "representative-of-sales-and-order-management",
  "supervisor-of-operations",
  "copywriter",
  "freelance-sales-and-marketing-advisor-2",
];

export const BUSINESSES = [
  {
    name: "NOVA Marketing",
    logo: "/media/2026/10/logo-nova.webp",
    photo: "/media/2026/10/nova-team.png",
    text: "Our digital marketing and e-commerce arm, helping brands grow online through content, advertising, and web development.",
    href: "https://seats-inc.com/nova-marketing/",
  },
  {
    name: "LOKA Japanese Food & Beverage",
    logo: "/media/2026/10/logo-loka.webp",
    photo: "/media/2026/10/loka-sake-products.jpg",
    text: "LOKA imports and distributes Japanese and other food and beverage products to restaurants, hotels, supermarkets, and retail partners in Cambodia.",
    href: "https://lokajapanesefoodsbeverage.com/",
  },
  {
    name: "S.E.A.T.S Farm",
    logo: "/media/2026/10/logo-seats-farm.webp",
    photo: "/media/2022/11/seatsfarm-interviews.jpg",
    text: "Agricultural production and development. We grow high-quality produce from Cambodia for local and global markets.",
    href: "https://seatsfarm.com/",
  },
  {
    name: "PISA Food Retail",
    logo: "/media/2026/10/logo-pisa.webp",
    photo: "/media/2026/10/pisa-retail.jpg",
    text: "Retail business of food and daily products. We bring quality products to more customers through our retail stores.",
    href: "https://seats-inc.com/pisa-food-retail/",
  },
];

export const COMPANY_GOAL = {
  paragraphs: [
    "A decade ago, a simple question sparked everything: why can't Cambodia produce something the world recognizes as top-quality?",
    "That question became S.E.A.T.S Inc. With a small, determined team who believed in the vision, we've grown step by step ever since — and we're proud of what we've built together.",
  ],
};

export const OUTBOUND_BANNER = {
  href: "https://seats-inc.com/en/home-2/",
  image: "/media/2022/10/banner-jump-to-seatsinc-scaled.jpg",
};
