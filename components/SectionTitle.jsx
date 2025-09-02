export default function SectionTitle({ kicker, title, subtitle }){
  return (
    <div className="text-center max-w-3xl mx-auto mb-10">
      {kicker && <p className="uppercase tracking-widest text-xs text-brand-teal/80">{kicker}</p>}
      <h2 className="text-3xl md:text-4xl font-extrabold text-brand-teal">{title}</h2>
      {subtitle && <p className="mt-3 text-base text-brand-charcoal/80">{subtitle}</p>}
    </div>
  )
}