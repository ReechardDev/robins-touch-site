// components/SectionTitle.jsx
export default function SectionTitle({ kicker, title, subtitle, align = "center" }) {
  const alignment = align === "left" ? "text-left" : "text-center";
  return (
    <div className={alignment}>
      {kicker && (
        <p className="text-xs font-semibold tracking-wider text-teal-700 uppercase">
          {kicker}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-extrabold text-teal-800">{title}</h2>
      {subtitle && <p className="mt-2 text-slate-600">{subtitle}</p>}
    </div>
  );
}
