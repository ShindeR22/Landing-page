type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  inverse?: boolean;
};

export function SectionHeading({ eyebrow, title, description, inverse = false }: SectionHeadingProps) {
  return (
    <div className={`section-heading flex flex-col ${inverse ? "section-heading-inverse" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="editorial-title">{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
    </div>
  );
}
