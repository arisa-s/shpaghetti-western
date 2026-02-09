import Image from "next/image";

export default function SwPageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-deep-green font-sans">
      <main className="relative flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-20 md:py-32 px-4 sm:px-8 md:px-16 bg-white">
        <Image
          src="/paper-texture.jpg"
          alt=""
          fill
          className="object-cover object-center"
          quality={90}
          priority
        />
        <div className="relative z-10">{children}</div>
      </main>
    </div>
  );
}
