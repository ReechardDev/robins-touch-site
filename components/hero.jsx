import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
<section className="relative overflow-hidden pt-0 -mt-6 md:-mt-8">
  <div className="absolute inset-0">
    {/* keep your existing image path if you want; this one exists from your tree */}
    <Image src="/robin/caregiver-hero.jpg" alt="" fill priority className="object-cover" />
    <div className="absolute inset-0 bg-emerald-950/55" />
<div className="absolute inset-0 bg-gradient-to-r from-emerald-950/60 via-emerald-900/40 to-transparent" />
    {/* darker gradient for legibility */}
    <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/70 via-emerald-900/55 to-transparent backdrop-blur-[1px]" />
  </div>

      <div className="text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]">
  {/* heading, paragraph, buttons… */}
</div>
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
