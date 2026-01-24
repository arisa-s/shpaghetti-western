interface QuoteBlockProps {
  children: React.ReactNode;
  author: string;
  className?: string;
}

export default function QuoteBlock({
  children,
  author,
  className = "",
}: QuoteBlockProps) {
  return (
    <blockquote
      className={`border-l-4 border-maroon pl-4 md:pl-6 py-4 my-8 md:my-12 ${className}`}
    >
      <p className="text-lg md:text-xl text-black mb-3">{children}</p>
      <cite className="text-xs text-black/50 uppercase tracking-widest not-italic">
        — {author}
      </cite>
    </blockquote>
  );
}


