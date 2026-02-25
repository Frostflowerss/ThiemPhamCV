import { Reveal } from "./Reveal";
import { TiltCard } from "./TiltCard";

export function ProjectList({
  items,
}: {
  items: Array<{ name: string; role: string; class?: string; note?: string }>;
}) {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {items.map((p, idx) => (
        <Reveal key={idx} as="div" delay={idx * 0.35}>
          <TiltCard className="rounded-2xl border hairline bg-ink-900/50 p-5 hover:shadow-glow">
            <div className="text-base font-semibold">{p.name}</div>
            <div className="mt-1 text-sm text-accent-500/90">{p.role}</div>
            {p.class ? <div className="mt-2 text-sm muted">{p.class}</div> : null}
            {p.note ? <div className="mt-2 text-[12px] muted2">{p.note}</div> : null}
          </TiltCard>
        </Reveal>
      ))}
    </div>
  );
}
