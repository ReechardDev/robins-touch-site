// app/pricing/page.js
import SectionTitle from "../../components/SectionTitle";

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

export default function PricingPage() {
  return (
    <main className="pt-16 md:pt-24 pb-24 md:pb-32 bg-teal-50/60">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle
          kicker="Pricing"
          title="Simple, flexible care plans"
          subtitle="Transparent rates with no long-term contracts."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
            features={["Good for appointments & errands", "Includes check-ins"]}
          />
          <PriceCard
            title="Full-Day Block"
            price="$300"
            unit="/10 hours"
            features={["Best value for daily support", "Flexible scheduling"]}
          />
        </div>

        <p className="mt-8 text-sm text-slate-600">
          Rates may vary based on distance and specific care needs. Overnight support and
          recurring schedules available—ask for a custom quote.
        </p>
      </div>
    </main>
  );
}
