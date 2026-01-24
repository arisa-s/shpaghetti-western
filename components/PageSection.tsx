interface PageSectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export default function PageSection({
  title,
  children,
  className = "",
}: PageSectionProps) {
  return (
    <section className={`space-y-4 ${className}`}>
      {title && (
        <h2 className="text-xl font-cowboy tracking-wide text-black">
          {title}
        </h2>
      )}
      <div className="space-y-4 text-black leading-relaxed text-base">
        {children}
      </div>
    </section>
  );
}


