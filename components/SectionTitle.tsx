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
      <Image
        src="/pasta-wave-one.png"
        alt=""
        width={240}
        height={48}
        className="w-full object-contain max-w-24 md:max-w-48 lg:max-w-80"
        aria-hidden="true"
      />
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-cormorant font-bold ${titleClassName}`}
      >
        {children}
      </h2>
      <Image
        src="/pasta-wave-one.png"
        alt=""
        width={240}
        height={48}
        className="w-full object-contain max-w-24 md:max-w-48 lg:max-w-80"
        aria-hidden="true"
      />
    </div>
  );
}
