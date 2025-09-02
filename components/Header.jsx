"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header(){
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.svg" alt="Robin's Touch logo" width={36} height={36} />
          <span className="text-lg font-bold text-brand-teal">Robin&apos;s Touch</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/services" className="hover:text-brand-teal">Services</Link>
          <Link href="/pricing" className="hover:text-brand-teal">Pricing</Link>
          <Link href="/about" className="hover:text-brand-teal">About</Link>
          <Link href="/contact" className="btn">Request Care</Link>
        </nav>

        <button onClick={()=>setOpen(!open)} className="md:hidden border rounded-xl px-3 py-2">
          Menu
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="container py-3 flex flex-col gap-3">
            <Link href="/services" onClick={()=>setOpen(false)}>Services</Link>
            <Link href="/pricing" onClick={()=>setOpen(false)}>Pricing</Link>
            <Link href="/about" onClick={()=>setOpen(false)}>About</Link>
            <Link href="/contact" className="btn" onClick={()=>setOpen(false)}>Request Care</Link>
          </div>
        </div>
      )}
    </header>
  )
}