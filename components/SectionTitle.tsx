import Image from "next/image";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
}

export default function SectionTitle({
  children,
  className = "",
  titleClassName = "",
}: SectionTitleProps) {
  return (
    <div className={`flex items-center justify-center gap-6 ${className}`}>
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-cormorant font-bold ${titleClassName}`}
      >
        {children}
      </h2>
    </div>
  );
}
