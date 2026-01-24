export default function SwPageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-20 md:py-32 px-4 sm:px-8 md:px-16 bg-white">
        {children}
      </main>
    </div>
  );
}

