import { Refs } from "./components/Refs";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold text-zinc-800 dark:text-zinc-200">
          React Playground
        </h1>
        <p className="mt-3 text-2xl text-zinc-600 dark:text-zinc-400">
          A playground for React and Next.js experiments.
        </p>

        <Refs />
      </main>
    </div>
  );
}
