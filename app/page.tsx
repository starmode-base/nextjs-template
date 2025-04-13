/* eslint-disable @next/next/no-img-element */
export default function Home() {
  return (
    <main className="flex h-dvh flex-col items-center justify-center gap-10 p-5">
      <img src="/starmode-logo.svg" alt="logo" className="w-full max-w-xl" />
      <div className="flex flex-col gap-2">
        <h1 className="text-center text-4xl font-bold">nextjs-template</h1>
        <a
          className="text-center underline hover:no-underline"
          href="https://github.com/starmode-base/nextjs-template"
          target="_blank"
        >
          https://github.com/starmode-base/nextjs-template
        </a>
      </div>
    </main>
  );
}
