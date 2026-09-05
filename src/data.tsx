import { Icons } from "@/components/icons";
import { siteConfig } from "@/data/site";

export const DATA = {
  url: siteConfig.url,
  lastUpdated: siteConfig.lastUpdated,
  name: "Zangwei Zheng",
  description: "AI Researcher & Full Stack Developer",
  chinese: {
    name: "郑奘巍",
  },
  navbar: [
    { href: "/", icon: Icons.home, label: "Home" },
    { href: "/blog", icon: Icons.notebook, label: "Blog" },
    { href: "/resume.pdf", icon: Icons.fileuser, label: "CV" },
  ],
  location: "EGYPT",
  locationLink: "https://www.google.com/maps/place/egypt",
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/nooragab",
        icon: Icons.github,
        footer: true,
      },
      X: {
        name: "X",
        url: "https://x.com/nooragab",
        icon: Icons.x,
        footer: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nour-ragab/",
        icon: Icons.linkedin,
        footer: true,
      },
      email: {
        name: "Email",
        url: "mailto:nourragab2811@gmail.com",
        icon: Icons.email,
        footer: false,
      },
    },
  },
} as const;

export function getEmail(): string {
  return DATA.contact.social.email.url;
}
