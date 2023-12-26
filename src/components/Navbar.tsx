"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Modal from "@/components/Modal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header
      className={`header ${pathname === "/blog" ? "relative" : "absolute"}`}
    >
      <Link
        className={`text-lg font-medium bg-white p-2 rounded-lg w-24 text-center ${
          pathname === "/" ? "text-blue-700 " : "text-black"
        }`}
        href="/"
      >
        Home
      </Link>
      {pathname !== "/blog" && (
        <nav className="flex text-lg gap-7 font-medium  nav-bar">
          <ul className="flex">
            <li className="cursor-pointer" onClick={() => setIsOpen(true)}>
              About
            </li>
            <li className="cursor-pointer" onClick={() => setIsOpen(true)}>
              Projects
            </li>
            <li>
              <Link
                className={pathname === "/projects" ? "text-blue-500" : ""}
                href="/blog"
              >
                Blog
              </Link>
            </li>
          </ul>
          <Modal onClose={() => setIsOpen(false)} open={isOpen}>
            <div>{"write something here!!"}</div>
          </Modal>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
