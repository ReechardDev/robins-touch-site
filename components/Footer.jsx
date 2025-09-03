// components/Footer.jsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-teal-200 bg-gradient-to-t from-teal-50 to-grey-50">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-10">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {/* Brand blurb */}
          <div>
            <h3 className="text-base md:text-lg font-semibold text-teal-800">
              Robin’s Touch Senior Care
            </h3>
            <p className="mt-1.5 text-sm text-slate-700">
              Compassionate, non-medical senior support across Denver Metro.
            </p>
            <p className="mt-2 text-xs text-slate-700/90">
              CPR-Certified • Background-Checked
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base md:text-lg font-semibold text-teal-800">Contact</h3>
            <p className="mt-1.5 text-sm text-slate-700">Denver, CO</p>
            <p className="mt-1">
              <a href="tel:7206908765" className="text-sm text-teal-800 hover:underline">
                (720) 690-8765
              </a>
            </p>
            <p className="mt-1">
              <a
                href="mailto:miller.76.robin@gmail.com"
                className="text-sm text-teal-800 hover:underline"
              >
                miller.76.robin@gmail.com
              </a>
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-base md:text-lg font-semibold text-teal-800">Quick Links</h3>
            <ul className="mt-1.5 space-y-1.5 text-sm">
              <li>
                <Link
                  href="/services"
                  className="text-slate-700 hover:text-teal-900 hover:underline"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-slate-700 hover:text-teal-900 hover:underline"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="text-slate-700 hover:text-teal-900 hover:underline"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-700 hover:text-teal-900 hover:underline"
                >
                  Request Care
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 md:mt-8 border-t border-green-200 pt-4 text-xs text-slate-700/90">
          © {new Date().getFullYear()} Robin’s Touch Senior Care. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
