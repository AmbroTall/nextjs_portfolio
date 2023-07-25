import Link from "next/link";
import React from "react";

const navlinks = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "Portfolio", url: "/portfolio" },
  { id: 3, name: "Blog", url: "/blog" },
  { id: 4, name: "About", url: "/about" },
  { id: 5, name: "Contact", url: "/contact" },
  { id: 5, name: "Dashboard", url: "/dashboard" },
];

const NavBar = () => {
  return (
    <div>
      <Link href="/">Ambrose</Link>
      <div>
        {navlinks.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
