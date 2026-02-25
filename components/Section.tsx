import { Reveal } from "./Reveal";

export function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-10">
      <Reveal as="div" delay={0}>
        <div>
          <h2 className="text-[13px] tracking-wide2 uppercase text-accent-500/95">
            {title}
          </h2>
          {subtitle ? <p className="mt-2 text-sm muted max-w-3xl">{subtitle}</p> : null}
        </div>
      </Reveal>

      <div className="mt-6 pt-6 relative divider">
        <span className="draw" />
        <div className="border-t hairline opacity-0" />
        <div>{children}</div>
      </div>
    </section>
  );
}
