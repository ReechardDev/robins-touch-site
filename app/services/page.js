// app/services/page.js
import Link from "next/link";
import SectionTitle from "../../components/SectionTitle";

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

export default function ServicesPage() {
  return (
    <main className="pt-16 md:pt-24 pb-24 md:pb-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle
          kicker="Services"
          title="Support that meets your family where you are"
          subtitle="Simple, flexible, trustworthy care."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

        <div className="mt-12 flex justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-teal-700 px-5 py-3 font-semibold text-white shadow hover:bg-teal-800 transition"
          >
            Request Care
          </Link>
        </div>
      </div>
    </main>
  );
}
