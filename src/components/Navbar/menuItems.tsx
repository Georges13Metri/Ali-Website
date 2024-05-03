import { NavbarItem } from "./Navbar";

export const NavbarItems: NavbarItem[] = [
  {
    label: "HOME",
    href: "/",
  },
  {
    label: "HOW IT WORKS",
    href: "/aboutus",
  },
  {
    label: "SERVICES",
    menuItems: [
      { label: "PERSONAL TRAINING", href: "/" },
      { label: "MINDSET COURSES", href: "/" },
    ],
  },
  {
    label: "SUCCESS STORIES",
    href: "/",
  },
  {
    label: "CONTACT",
    href: "/",
  },
  {
    label: "BLOG",
    href: "/",
  },
  {
    label: "DISCOUNTED SUPPLEMENTS",
    href: "/",
  },
];
