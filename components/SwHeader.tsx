export default function SwHeader({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
      {children}
    </h1>
  );
}

