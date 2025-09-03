export const metadata = {
  title: "Services – Robin’s Touch Senior Care",
  description: "Simple, flexible, trustworthy care where you are.",
};

const cardBase =
  "rounded-3xl border border-teal-200/60 bg-teal-50/70 p-6 shadow-sm hover:bg-teal-100 transition-colors";

export default function ServicesPage() {
  return (
    <main className="bg-slate-50">
      {/* Header */}
      <section className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold text-center text-emerald-900">
            Support that meets your family where you are
          </h1>
          <p className="text-center text-slate-600 mt-3">
            Simple, flexible, trustworthy care.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-4 grid gap-6 md:gap-8 md:grid-cols-3">
          {/* 1 */}
          <div className={cardBase}>
            <h3 className="font-semibold text-lg">🚗 Transportation & Appointments</h3>
            <p className="text-slate-600 mt-2">
              Reliable rides to and from doctor visits, therapy, and errands.
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-1 text-slate-700">
              <li>Door-to-door pick-ups</li>
              <li>Wait & assist during visits</li>
            </ul>
          </div>

          {/* 2 */}
          <div className={cardBase}>
            <h3 className="font-semibold text-lg">🤝 Companionship</h3>
            <p className="text-slate-600 mt-2">
              Kind conversation and activities that brighten the day.
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-1 text-slate-700">
              <li>Walks & light exercise</li>
              <li>Games, reading, hobbies</li>
            </ul>
          </div>

          {/* 3 */}
          <div className={cardBase}>
            <h3 className="font-semibold text-lg">🏠 Light Home Help</h3>
            <p className="text-slate-600 mt-2">
              Keep things tidy and comfortable.
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-1 text-slate-700">
              <li>Laundry & dishes</li>
              <li>Meal prep & light cleaning</li>
            </ul>
          </div>

          {/* 4 */}
          <div className={cardBase}>
            <h3 className="font-semibold text-lg">📞 Daily Check-Ins</h3>
            <p className="text-slate-600 mt-2">
              Quick wellness checks in person or by phone.
            </p>
          </div>

          {/* 5 */}
          <div className={cardBase}>
            <h3 className="font-semibold text-lg">🛌 Respite for Family</h3>
            <p className="text-slate-600 mt-2">
              Short-term support so caregivers can rest.
            </p>
          </div>

          {/* 6 */}
          <div className={cardBase}>
            <h3 className="font-semibold text-lg">🗓️ Care Coordination</h3>
            <p className="text-slate-600 mt-2">
              Schedules, reminders, and follow-ups.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
