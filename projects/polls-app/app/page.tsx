"use client";

import { useAuth } from "@clerk/nextjs";

export default function Home() {
  const { userId } = useAuth();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      {!userId && (
        <>
          <h1 className="text-4xl font-bold mb-8">Welcome to the Polls App!</h1>
          <p className="text-lg text-center">
            This is the home page of your Polls application. Start by creating a
            new poll or viewing existing ones.
          </p>
        </>
      )}
      {userId && (
        <>
          <h1 className="text-4xl font-bold mb-8">Your Polls Dashboard</h1>
          <p className="text-lg text-center">
            Here you can manage your polls, view results, and create new polls.
          </p>
        </>
      )}
    </main>
  );
}
