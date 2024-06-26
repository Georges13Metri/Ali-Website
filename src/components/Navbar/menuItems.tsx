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
      { label: "PERSONAL TRAINING", href: "/onetoonecoaching" },
      { label: "MINDSET COURSES", href: "/mindsetcourse" },
    ],
  },
  {
    label: "SUCCESS STORIES",
    href: "/",
  },
  {
    label: "CONTACT",
    href: "/contactus",
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
