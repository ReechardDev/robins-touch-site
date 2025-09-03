// app/contact/page.js
import SectionTitle from "../../components/SectionTitle";

export default function ContactPage() {
  return (
    <main className="pt-16 md:pt-24 pb-24 md:pb-32 bg-emerald-50/70">
      <div className="max-w-3xl mx-auto px-4">
        <SectionTitle
          kicker="Request Care"
          title="Tell us about your needs"
          subtitle="We’ll call you to confirm details and schedule a time that works."
          align="left"
        />

        <form name="contact" method="POST" data-netlify="true" className="mt-8 space-y-4">
          <input type="hidden" name="form-name" value="contact" />
          <div>
            <label className="block text-sm font-medium text-slate-700">Your Name</label>
            <input
              name="name"
              required
              className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-teal-600"
            />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-slate-700">Phone</label>
              <input
                name="phone"
                required
                className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-teal-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <input
                name="email"
                type="email"
                className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-teal-600"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Location</label>
            <input
              name="location"
              placeholder="City or neighborhood"
              className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-teal-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Care Needs</label>
            <textarea
              name="message"
              rows={4}
              placeholder="Transportation, companionship, light home help, etc."
              className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-teal-600"
            />
          </div>
          <div className="pt-2">
            <button
              type="submit"
              className="inline-flex items-center rounded-full bg-teal-700 px-5 py-3 font-semibold text-white shadow hover:bg-teal-800 transition"
            >
              Submit Request
            </button>
          </div>
        </form>

        <p className="mt-6 text-sm text-slate-600">
          Prefer to talk? Call{" "}
          <a href="tel:7206908765" className="text-teal-700 hover:underline">
            (720) 690-8765
          </a>
          .
        </p>
      </div>
    </main>
  );
}
