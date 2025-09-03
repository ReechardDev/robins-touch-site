import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* background image + overlays */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <Image
          src="/robin/caregiver-hero.jpg"  // lives in /public/robin
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center blur-[1px]"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* left text */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-emerald-900">
              Compassionate Senior Care in Denver Metro Areas
            </h1>
            <p className="mt-4 text-slate-800/90 max-w-prose">
              Non-medical support you can trust—rides to appointments,
              companionship, light home help, and daily check-ins.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-emerald-700 px-5 py-3 text-white font-medium shadow hover:bg-emerald-800 focus-visible:ring-2 focus-visible:ring-emerald-600"
              >
                Request Care
              </Link>
              <a
                href="tel:+17206908765"
                className="inline-flex items-center rounded-full border border-emerald-800/30 bg-white/85 backdrop-blur px-5 py-3 text-emerald-900 shadow-sm hover:bg-white"
              >
                Call (720) 690-8765
              </a>
            </div>

            <ul className="mt-6 flex flex-wrap gap-3 text-sm">
              <li className="inline-flex items-center gap-2 rounded-full border bg-white/85 px-3 py-1 shadow-sm">
                <span className="font-semibold">CPR-Certified</span>
              </li>
              <li className="inline-flex items-center gap-2 rounded-full border bg-white/85 px-3 py-1 shadow-sm">
                <span className="font-semibold">Background-Checked</span>
              </li>
              <li className="inline-flex items-center gap-2 rounded-full border bg-white/85 px-3 py-1 shadow-sm">
                <span className="font-semibold">25+ Years Experience</span>
              </li>
            </ul>
          </div>

          {/* right hero card (keep this block) */}
          <div className="relative">
            <div className="rounded-3xl bg-white/85 backdrop-blur ring-1 ring-black/5 shadow-xl p-8 md:p-10 min-h-[320px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
