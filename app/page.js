import SectionTitle from "../components/SectionTitle";
import Link from "next/link";
import { CarFront, HeartHandshake, Home, CheckCircle2, Star } from "lucide-react";

function Feature({icon:Icon, title, desc}){
  return (
    <div className="card p-6">
      <div className="w-12 h-12 rounded-2xl bg-brand-mint flex items-center justify-center mb-3">
        <Icon className="text-brand-teal" />
      </div>
      <h3 className="font-semibold text-lg text-brand-teal">{title}</h3>
      <p className="text-sm mt-1">{desc}</p>
    </div>
  )
}

export default function Page(){
  return (
    <div>
      {/* Hero */}
      <section className="section bg-white">
        <div className="container grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-brand-teal">Compassionate Senior Care in Denver Metro</h1>
            <p className="mt-4 text-lg">Non-medical support with 25+ years of experience. Transportation, companionship, light home help, and daily check-ins.</p>
            <div className="mt-6 flex gap-3">
              <Link href="/contact" className="btn">Request Care</Link>
              <a href="tel:7206908765" className="btn-outline">Call 720-690-8765</a>
            </div>
            <div className="flex items-center gap-3 mt-6 text-sm">
              <CheckCircle2 className="text-brand-teal" /><span>CPR Certified</span>
              <Star className="text-brand-gold" /><span>25+ Years Experience</span>
            </div>
          </div>
          <div className="card p-0 overflow-hidden">
            <img src="/hero-placeholder.jpg" alt="Caregiver with senior" className="w-full h-full object-cover"/>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="section">
        <div className="container">
          <SectionTitle kicker="Services" title="Support that meets your family where you are" subtitle="Simple, flexible, trustworthy care."/>
          <div className="grid md:grid-cols-3 gap-6">
            <Feature icon={CarFront} title="Transportation" desc="Safe rides to appointments, errands, and activities."/>
            <Feature icon={HeartHandshake} title="Companionship" desc="Conversation, walks, games, and appointment support."/>
            <Feature icon={Home} title="Light Home Help" desc="Meal prep, tidying, reminders, and daily check-ins."/>
          </div>
          <div className="text-center mt-8">
            <Link href="/services" className="btn">Explore Services</Link>
          </div>
        </div>
      </section>

      {/* Pricing preview */}
      <section className="section bg-white">
        <div className="container">
          <SectionTitle kicker="Pricing" title="Clear, Simple Pricing" subtitle="No hidden fees. Custom plans available."/>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card p-6">
              <h3 className="font-bold text-xl text-brand-teal">Per Trip Ride</h3>
              <p className="mt-2 text-sm">To appointments, errands, etc.</p>
              <p className="mt-4 text-3xl font-extrabold">$30</p>
            </div>
            <div className="card p-6 border-brand-gold border-2">
              <h3 className="font-bold text-xl text-brand-teal">Monthly Rides</h3>
              <p className="mt-2 text-sm">Up to 12 rides / month</p>
              <p className="mt-4 text-3xl font-extrabold">$350</p>
              <p className="text-xs mt-1 text-brand-gold font-semibold">Best Value</p>
            </div>
            <div className="card p-6">
              <h3 className="font-bold text-xl text-brand-teal">Companion / Home Help</h3>
              <p className="mt-2 text-sm">Companionship, daily support</p>
              <p className="mt-4 text-3xl font-extrabold">$25<span className="text-base font-semibold">/hr</span></p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/pricing" className="btn">See Full Pricing</Link>
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="section">
        <div className="container text-center">
          <SectionTitle kicker="Areas Served" title="Denver • Aurora • Lakewood • Littleton • Centennial • Thornton" />
          <p className="text-sm">References available upon request. Non-medical companion & support services only.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-mint">
        <div className="container text-center">
          <h3 className="text-2xl md:text-3xl font-extrabold text-brand-teal">Ready to get started?</h3>
          <p className="mt-2">Tell us what you need and we’ll build a simple care plan together.</p>
          <div className="mt-6">
            <Link href="/contact" className="btn">Request Care</Link>
          </div>
        </div>
      </section>
    </div>
  )
}