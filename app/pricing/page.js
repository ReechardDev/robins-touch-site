export const metadata = {
  title: "Pricing & Care Plans – Robin’s Touch Senior Care",
  description: "Simple hourly rates. Flexible plans that fit your routine.",
};

const cardBase =
  "rounded-3xl border border-teal-200/60 bg-teal-50/70 p-6 shadow-sm hover:bg-teal-100 transition-colors";

function PlanCard({ name, price, blurb, features = [], badge }) {
  return (
    <div className={cardBase}>
      {badge ? (
        <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-teal-200 text-teal-900 mb-3">
          {badge}
        </span>
      ) : null}
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-slate-600 mt-1">{blurb}</p>
      <div className="mt-4">
        <div className="text-4xl font-extrabold text-emerald-900">{price}</div>
        <div className="text-slate-500 text-sm">per hour • no contracts</div>
      </div>
      {features.length > 0 && (
        <ul className="mt-5 list-disc pl-5 space-y-1 text-slate-700">
          {features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      )}
      <a
        href="/contact"
        className="mt-6 inline-flex items-center justify-center rounded-full px-5 py-2.5 bg-teal-600 text-white font-medium hover:bg-teal-700 transition-colors"
      >
        Request Care
      </a>
    </div>
  );
}

export default function PricingPage() {
  return (
    <main className="bg-slate-50">
      <section className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-emerald-900">Care Plans</h1>
          <p className="text-slate-600 mt-3">Simple hourly rates. No long contracts.</p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-4 grid gap-6 md:gap-8 md:grid-cols-3">
          <PlanCard
            name="Essentials"
            price="$28"
            blurb="Light support a few days a week."
            features={["2–3 visits/week", "Companionship & light home help", "Appointment reminders"]}
          />
          <PlanCard
            name="Standard"
            price="$32"
            blurb="Our most popular balanced plan."
            badge="Most Popular"
            features={["4–5 visits/week", "Meal prep, laundry, check-ins", "Transportation to appointments"]}
          />
          <PlanCard
            name="Plus"
            price="$36"
            blurb="Extra support for busy families."
            features={["Daily visits", "Care coordination & follow-ups", "Respite coverage"]}
          />
        </div>
      </section>
    </main>
  );
}
