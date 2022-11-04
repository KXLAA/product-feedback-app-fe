import { signIn, signOut, useSession } from "next-auth/react";

import { trpc } from "@/utils/trpc";

export function AuthShowcase() {
  const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery();

  const { data: sessionData } = useSession();
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      {sessionData && (
        <p className="text-2xl text-blue-500">
          Logged in as {sessionData?.user?.name}
        </p>
      )}
      {secretMessage && (
        <p className="text-2xl text-blue-500">{secretMessage}</p>
      )}
      <button
        className="bg-violet-50 hover:bg-violet-100 rounded-md border border-black px-4 py-2 text-xl shadow-lg"
        onClick={sessionData ? () => signOut() : () => signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
}
