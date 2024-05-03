"use client";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaBars, FaTimes } from "react-icons/fa";

interface MenuItem {
  label: string;
  href: string;
}

export interface NavbarItem {
  label: string;
  href?: string;
  menuItems?: MenuItem[];
}

interface NavbarProps {
  items: NavbarItem[];
}

const Navbar: React.FC<NavbarProps> = ({ items }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleMenu = () => {
    setOpen(!open);
    setActiveIndex(null); // Close any open submenu when toggling the menu
  };

  const toggleSubMenu = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container h-20 flex justify-between items-center">
        <div>
          <img
            src="/healthy-lifestyle-with-gym.avif"
            alt="Logo"
            className="h-16 ml-5 w-auto"
          />
        </div>
        <ul className="hidden md:flex space-x-4">
          {items.map((item, index) => (
            <li key={index} className="relative">
              <div className="flex items-center">
                <a
                  href={item.href}
                  className="text-black hover:text-gray-600"
                  onClick={() => toggleSubMenu(index)}
                >
                  {item.label}
                </a>
                {item.menuItems && (
                  <span
                    onClick={() => toggleSubMenu(index)}
                    className="ml-1 cursor-pointer text-black"
                  >
                    {activeIndex === index ? (
                      <FaChevronUp className="text-black" />
                    ) : (
                      <FaChevronDown className="text-black" />
                    )}
                  </span>
                )}
              </div>
              {item.menuItems && activeIndex === index && (
                <ul className="absolute left-0 bg-gray-200 shadow-xl mt-1">
                  {item.menuItems.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <a
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-300"
                      >
                        {subItem.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <div className="md:hidden lg:hidden text-black mx-auto">
          <button onClick={toggleMenu}>
            {open ? (
              <FaTimes className="text-black" />
            ) : (
              <FaBars className="text-black" />
            )}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden">
          <ul
            className="flex flex-col ml-auto items-center
            mx-auto h-screen justify-center space-y-4"
          >
            {items.map((item, index) => (
              <li key={index}>
                <div className="flex items-center">
                  <a
                    href={item.href}
                    className="text-black hover:text-gray-600"
                    onClick={() => toggleSubMenu(index)}
                  >
                    {item.label}
                  </a>
                  {item.menuItems && (
                    <span
                      onClick={() => toggleSubMenu(index)}
                      className="cursor-pointer ml-1 text-black"
                    >
                      {activeIndex === index ? (
                        <FaChevronUp className="text-black" />
                      ) : (
                        <FaChevronDown className="text-black" />
                      )}
                    </span>
                  )}
                </div>
                {item.menuItems && activeIndex === index && (
                  <ul className=" bg-gray-200 mt-1  ">
                    {item.menuItems.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <a
                          href={subItem.href}
                          className="block px-4 py-2 text-sm
                           text-gray-800 hover:bg-gray-300"
                        >
                          {subItem.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
