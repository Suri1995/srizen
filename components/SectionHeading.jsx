import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <Reveal className={`max-w-2xl ${alignClass}`}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2
        className={`font-display text-3xl md:text-[2.6rem] leading-[1.12] ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      <div className={`divider-petal my-5 ${align === "center" ? "mx-auto" : ""}`} />
      {description && (
        <p
          className={`text-base leading-relaxed ${
            light ? "text-white/70" : "text-navy/60"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
