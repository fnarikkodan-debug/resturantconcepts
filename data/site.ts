// Everything here is placeholder content. Edit freely.

export const site = {
  name: "Peppera",
  tagline: "Rejuvenate your tastebuds",
  subline: "Authentic organic ingredients & pepper-themed dining",
  status: "Opening soon",
  region: "Kerala",
  year: 2026,
  // Placeholder address: replace with the real one.
  address: ["Peppera", "M.G. Road, Kochi", "Kerala 682016, India"],
  // Placeholder links: replace with the real profiles.
  instagram: "https://www.instagram.com/",
  whatsapp: "https://wa.me/",
};

// Licence-free Unsplash placeholders. Swap for your own photography.
const unsplash = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;

export const images = {
  hero: unsplash("1679934409073-838c884261fb", 2400),
  hills: unsplash("1701152322144-b17ead7a13e2"),
  vine: unsplash("1706707250980-194236fefd04"),
  harvest: unsplash("1706707250965-1a0455b67fec"),
  peppercorns: unsplash("1789546555508-ac5dc3605466", 2000),
};
