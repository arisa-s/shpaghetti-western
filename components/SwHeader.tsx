export default function SwHeader({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-3xl font-semibold leading-10 tracking-tight text-gray-900">
      {children}
    </h1>
  );
}

