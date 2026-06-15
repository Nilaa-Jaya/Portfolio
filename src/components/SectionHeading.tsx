export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-12 text-center">
      <p className="font-serif text-sm font-semibold tracking-[0.2em] text-muted uppercase">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-serif text-4xl font-bold sm:text-5xl">{title}</h2>
      <div className="mx-auto mt-4 h-[3px] w-24 rounded-full bg-accent" />
    </div>
  );
}
