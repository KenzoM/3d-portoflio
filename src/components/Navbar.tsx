"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="header flex-row-reverse">
      <nav className="flex text-lg gap-7 font-medium">
        <ul>
          <li>
            <Link
              className={pathname === "/about" ? "text-blue-500" : ""}
              href="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={pathname === "/projects" ? "text-blue-500" : ""}
              href="/projects"
            >
              Projects
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
