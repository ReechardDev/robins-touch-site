import Link from "next/link";

export default function Footer(){
  return (
    <footer className="mt-16 border-t bg-white">
      <div className="container py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-brand-teal font-bold text-lg">Robin&apos;s Touch Senior Care</h3>
          <p className="mt-2 text-sm">Compassionate non-medical caregiver serving Denver, Aurora, Lakewood, Littleton, Centennial, and Thornton.</p>
        </div>
        <div>
          <h4 className="font-semibold text-brand-teal">Contact</h4>
          <ul className="mt-2 space-y-1 text-sm">
            <li>Phone: <a href="tel:7206908765" className="underline">720-690-8765</a></li>
            <li>Email: <a href="mailto:miller.76.robin@gmail.com" className="underline">miller.76.robin@gmail.com</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-brand-teal">Quick Links</h4>
          <ul className="mt-2 space-y-1 text-sm">
            <li><Link href="/services" className="underline">Services</Link></li>
            <li><Link href="/pricing" className="underline">Pricing</Link></li>
            <li><Link href="/contact" className="underline">Request Care</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="container py-4 text-xs text-gray-500 flex flex-wrap gap-2 justify-between">
          <span>© {new Date().getFullYear()} Robin&apos;s Touch Senior Care</span>
          <span>Non-medical companion & support services only.</span>
        </div>
      </div>
    </footer>
  );
}