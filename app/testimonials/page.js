// app/testimonials/page.js
import SectionTitle from "../../components/SectionTitle";
import { Star } from "lucide-react";

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

export default function TestimonialsPage() {
  return (
    <main className="pt-16 md:pt-24 pb-24 md:pb-32 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle
          kicker="Testimonials"
          title="Families trust Robin’s Touch"
          subtitle="Real experiences from clients across Denver Metro."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <TestimonialCard quote="Robin is so kind and reliable. My mom looks forward to her visits." name="Erica L." detail="Daughter, Greenwood Village" />
          <TestimonialCard quote="On-time rides to appointments and helpful reminders—huge relief for us." name="Daniel K." detail="Son, Aurora" />
          <TestimonialCard quote="Great conversation and light home help. The house feels calmer." name="Patrice W." detail="Niece, Lakewood" />
          <TestimonialCard quote="Professional, background-checked, and caring. We trust Robin completely." name="Maya T." detail="Granddaughter, Highlands Ranch" />
          <TestimonialCard quote="Daily check-ins gave our family peace of mind while we traveled." name="George & Lila S." detail="Family, Denver" />
          <TestimonialCard quote="Respectful, cheerful, and flexible with scheduling. Highly recommend." name="Owen D." detail="Grandson, Littleton" />
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="/contact"
            className="inline-flex items-center rounded-full bg-teal-700 px-5 py-3 font-semibold text-white shadow hover:bg-teal-800 transition"
          >
            Request Care
          </a>
        </div>
      </div>
    </main>
  );
}
