"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/collections", label: "Collections" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link className="brand" href="/">
          <span className="brand-mark">AJ</span>
          <span className="brand-text">Shree Soni Jewellers</span>
        </Link>
        <button className="menu-toggle" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
          Menu
        </button>
        <nav className={`site-nav ${open ? "open" : ""}`}>
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link key={link.href} className={active ? "active" : ""} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
