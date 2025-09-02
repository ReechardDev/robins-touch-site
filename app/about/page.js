import SectionTitle from "../../components/SectionTitle";

export default function Page(){
  return (
    <section className="section">
      <div className="container grid md:grid-cols-2 gap-10 items-start">
        <div>
          <SectionTitle kicker="About" title="Meet Robin" />
          <p className="text-base leading-7">
            Hi, I’m Robin Miller. I bring 25+ years of professional experience in hospice and elder care.
            Through Robin’s Touch Senior Care, I provide compassionate, respectful support that helps seniors
            live safely and happily at home. I’m CPR Certified and proud to serve families across Denver metro.
          </p>
          <ul className="mt-6 text-sm list-disc pl-5 space-y-2">
            <li>CPR Certified</li>
            <li>25+ Years Experience</li>
            <li>Locally owned & community focused</li>
            <li>References available upon request</li>
          </ul>
        </div>
        <div className="card overflow-hidden">
          <img src="/about-placeholder.jpg" alt="Robin with client" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  )
}