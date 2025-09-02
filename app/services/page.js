import SectionTitle from "../../components/SectionTitle";
import { CarFront, HeartHandshake, Home, Clock } from "lucide-react";

function Row({icon:Icon, title, items}){
  return (
    <div className="card p-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-brand-mint flex items-center justify-center">
          <Icon className="text-brand-teal" />
        </div>
        <h3 className="font-semibold text-lg text-brand-teal">{title}</h3>
      </div>
      <ul className="list-disc pl-6 mt-3 space-y-1 text-sm">
        {items.map((it,i)=>(<li key={i}>{it}</li>))}
      </ul>
    </div>
  )
}

export default function Page(){
  return (
    <section className="section">
      <div className="container">
        <SectionTitle kicker="Services" title="What We Offer" subtitle="Flexible, non-medical support for independent seniors."/>
        <div className="grid md:grid-cols-2 gap-6">
          <Row icon={CarFront} title="Transportation" items={[
            "Medical appointments (wait & return available)",
            "Grocery & pharmacy runs",
            "Errands & social outings"
          ]}/>
          <Row icon={HeartHandshake} title="Companionship" items={[
            "Conversation, walks, games",
            "Appointment support & note taking",
            "Reading, light activities"
          ]}/>
          <Row icon={Home} title="Light Home Help" items={[
            "Meal prep & light tidying",
            "Medication reminders",
            "Daily check-ins & wellness support"
          ]}/>
          <Row icon={Clock} title="Flexible Plans" items={[
            "Per trip, hourly, weekly & monthly options",
            "Custom packages for ongoing treatments",
            "References available"
          ]}/>
        </div>
      </div>
    </section>
  )
}