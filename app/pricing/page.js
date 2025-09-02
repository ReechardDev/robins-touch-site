import SectionTitle from "../../components/SectionTitle";

function Card({title, desc, price, note, highlight}){
  return (
    <div className={`card p-6 ${highlight ? "border-2 border-brand-gold" : ""}`}>
      <h3 className="font-bold text-xl text-brand-teal">{title}</h3>
      <p className="mt-2 text-sm">{desc}</p>
      <p className="mt-4 text-4xl font-extrabold">{price}</p>
      {note && <p className="text-xs mt-2 text-brand-charcoal/70">{note}</p>}
    </div>
  )
}

export default function Page(){
  return (
    <section className="section">
      <div className="container">
        <SectionTitle kicker="Pricing" title="Transparent, Simple Rates" subtitle="No hidden fees. Custom plans available."/>
        <div className="grid md:grid-cols-3 gap-6">
          <Card title="Per Trip Ride" desc="Appointments, errands, and more" price="$30" />
          <Card title="Monthly Rides" desc="Up to 12 rides / month" price="$350" note="Best for recurring treatments" highlight />
          <Card title="Companion / Home Help" desc="Companionship & daily support" price="$25/hr" />
        </div>
        <p className="text-sm mt-6">Have unique needs? We’ll tailor a plan that fits your schedule and budget.</p>
      </div>
    </section>
  )
}