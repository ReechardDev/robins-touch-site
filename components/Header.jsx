// components/Header.jsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ href, children }) {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link
      href={href}
      className={`px-3 py-2 rounded-full transition ${
        active ? "bg-teal-100 text-teal-800" : "text-slate-700 hover:text-teal-700"
      }`}
    >
      {children}
    </Link>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="font-semibold text-teal-800">
          Robin’s Touch
        </Link>

        <nav className="hidden md:flex items-center gap-2">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/services">Services</NavLink>
          <NavLink href="/pricing">Pricing</NavLink>
          <NavLink href="/testimonials">Testimonials</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>

        <Link
          href="/contact"
          className="hidden md:inline-flex rounded-full bg-teal-500 px-4 py-2 font-semibold text-white hover:bg-teal-800 transition"
        >
          Request Care
        </Link>
      </div>
    </header>
  );
}
