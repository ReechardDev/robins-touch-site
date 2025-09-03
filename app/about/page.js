// app/about/page.js
import SectionTitle from "../../components/SectionTitle";

export default function AboutPage() {
  return (
    <main className="pt-16 md:pt-24 pb-24 md:pb-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle
          kicker="About"
          title="Care built on trust & experience"
          subtitle="25+ years supporting seniors with kindness, respect, and reliability."
        />

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-800">Our Approach</h3>
            <p className="mt-2 text-slate-600">
              We focus on non-medical support that helps seniors feel safe, seen, and
              independent. From rides and light home help to daily companionship, our care
              fits your family’s routines.
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-800">Values</h3>
            <ul className="mt-2 space-y-2 text-slate-600 list-disc list-inside">
              <li>Compassion & dignity</li>
              <li>Clear, punctual communication</li>
              <li>Background-checked, CPR-certified</li>
              <li>Flexible, family-first scheduling</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
