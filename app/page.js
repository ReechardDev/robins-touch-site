// app/page.js
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ShieldCheck, Star } from "lucide-react";

function Card({ title, desc, bullets = [] }) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow">
      <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
      <p className="mt-2 text-slate-600">{desc}</p>
      {bullets.length > 0 && (
        <ul className="mt-3 list-disc list-inside space-y-1 text-sm text-slate-600">
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

function PriceCard({ title, price, unit, features = [] }) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
      <div className="mt-3">
        <span className="text-3xl font-extrabold text-slate-900">{price}</span>
        <span className="ml-1 text-slate-500">{unit}</span>
      </div>
      {features.length > 0 && (
        <ul className="mt-4 space-y-2 text-sm text-slate-600 list-disc list-inside">
          {features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Stars({ count = 5 }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-4 w-4 text-amber-500" fill="currentColor" />
      ))}
    </div>
  );
}
function TestimonialCard({ quote, name, detail }) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <Stars />
      <p className="mt-3 text-slate-700 leading-relaxed">“{quote}”</p>
      <p className="mt-4 font-semibold text-slate-900">{name}</p>
      {detail && <p className="text-sm text-slate-500">{detail}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <main className="pt-16 md:pt-24">
      {/* HERO — full-bleed, blurred + darkened background, with hero card preserved */}
      <section className="relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/robin/hero-2.jpg"   // <-- place file at public/robin/hero-2.jpg
            alt="Caregiver with senior"
            fill
            priority
            sizes="100vw"
            className="object-cover blur-sm brightness-75 scale-105"
          />
          {/* Dark teal tint so text pops */}
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/50 via-teal-900/30 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-10 items-center min-h-[60vh] md:min-h-[70vh] py-12 md:py-20">
              {/* Left: copy + CTAs */}
              <div>
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-teal-800">
                  Compassionate Senior Care in Denver Metro Areas
                </h1>

                <p className="mt-4 text-lg text-slate-100 md:text-slate-200">
                  Non-medical support you can trust—rides to appointments, companionship,
                  light home help, and daily check-ins.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center rounded-full bg-teal-700 px-5 py-3 font-semibold text-white shadow hover:bg-teal-800 transition"
                  >
                    Request Care
                  </Link>
                  <a
                    href="tel:7206908765"
                    className="inline-flex items-center rounded-full border-2 border-teal-700 px-5 py-3 font-semibold text-teal-50 hover:bg-white/10 transition"
                  >
                    Call (720) 690-8765
                  </a>
                </div>

                {/* Feature chips */}
                <div className="mt-5 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/95 border px-3 py-1.5 text-sm shadow-sm">
                    <CheckCircle2 className="h-4 w-4 text-teal-700" />
                    CPR-Certified
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/95 border px-3 py-1.5 text-sm shadow-sm">
                    <ShieldCheck className="h-4 w-4 text-teal-700" />
                    Background-Checked
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/95 border px-3 py-1.5 text-sm shadow-sm">
                    <Star className="h-4 w-4 text-amber-500" />
                    25+ Years Experience
                  </span>
                </div>
              </div>

              {/* Right: hero image block (kept) */}
              <div className="relative h-80 md:h-[420px] rounded-3xl border shadow-lg bg-white/50 backdrop-blur-sm">
                {/* If you have a foreground hero image, uncomment and add it to /public/robin/robin-c.jpg
                <Image
                  src="/robin/robin-c.jpg"
                  alt="Caregiver with client"
                  fill
                  className="object-cover rounded-3xl"
                />
                */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES (light gray) */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-teal-800 text-center">
            Support that meets your family where you are
          </h2>
          <p className="mt-2 text-slate-600 text-center">Simple, flexible, trustworthy care.</p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card
              title="Transportation & Appointments"
              desc="Reliable rides to and from doctor visits, therapy, and errands."
              bullets={["Door-to-door pick-ups", "Wait & assist during visits"]}
            />
            <Card
              title="Companionship"
              desc="Kind conversation and activities that brighten the day."
              bullets={["Walks & light exercise", "Games, reading, hobbies"]}
            />
            <Card
              title="Light Home Help"
              desc="Keep things tidy and comfortable."
              bullets={["Laundry & dishes", "Meal prep & light cleaning"]}
            />
            <Card title="Daily Check-Ins" desc="Quick wellness checks in person or by phone." />
            <Card title="Respite for Family" desc="Short-term support so caregivers can rest." />
            <Card title="Care Coordination" desc="Schedules, reminders, and follow-ups." />
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              href="/services"
              className="inline-flex items-center rounded-full border-2 border-teal-700 px-5 py-3 font-semibold text-teal-700 hover:bg-teal-50 transition"
            >
              View all Services
            </Link>
          </div>
        </div>
      </section>

      {/* PRICING (mint/teal tint) */}
      <section className="bg-teal-50/60 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-extrabold text-teal-800 text-center">
            Care plans that fit your needs
          </h3>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <PriceCard
              title="Hourly Support"
              price="$30"
              unit="/hour"
              features={["2-hour minimum", "Transportation, companionship, light help"]}
            />
            <PriceCard
              title="Half-Day Block"
              price="$160"
              unit="/5 hours"
              features={["Great for appointments & errands", "Includes check-ins"]}
            />
            <PriceCard
              title="Full-Day Block"
              price="$300"
              unit="/10 hours"
              features={["Best value for daily support", "Flexible scheduling"]}
            />
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              href="/pricing"
              className="inline-flex items-center rounded-full bg-teal-700 px-5 py-3 font-semibold text-white shadow hover:bg-teal-800 transition"
            >
              See full pricing
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS (soft gold) */}
      <section className="bg-amber-50 py-16 md:py-24 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-extrabold text-teal-800 text-center">
            Families trust Robin’s Touch
          </h3>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <TestimonialCard
              quote="Robin is so kind and reliable. My mom looks forward to her visits."
              name="Erica L."
              detail="Daughter, Greenwood Village"
            />
            <TestimonialCard
              quote="On-time rides to appointments and helpful reminders—huge relief for us."
              name="Daniel K."
              detail="Son, Aurora"
            />
            <TestimonialCard
              quote="Great conversation and light home help. The house feels calmer."
              name="Patrice W."
              detail="Niece, Lakewood"
            />
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              href="/testimonials"
              className="inline-flex items-center rounded-full border-2 border-teal-700 px-5 py-3 font-semibold text-teal-700 hover:bg-teal-50 transition"
            >
              Read more testimonials
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
