"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="header">
      <Link
        className={`text-lg font-medium bg-white p-2 rounded-3xl ${
          pathname === "/" ? "text-blue-700 " : "text-black"
        }`}
        href="/"
      >
        Home
      </Link>
      <nav className="flex text-lg gap-7 font-medium">
        <ul className="flex">
          <li className="pr-4">
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
