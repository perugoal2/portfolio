type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-3">
        <span className="tag tag--signal">
          <span className="marker">§</span> {eyebrow}
        </span>
        <span className="h-px flex-1 bg-line" />
      </div>
      <h2 className="headline mt-4 text-balance text-3xl sm:text-[2.6rem]">{title}</h2>
      <p className="mt-4 max-w-2xl text-pretty text-base leading-8 text-bone-dim">{description}</p>
    </div>
  );
}
