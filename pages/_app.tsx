import "../styles/globals.css";

import { Jost } from "@next/font/google";
import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { AppHead } from "@/components/layout/AppHead";
import { FeedbackProvider } from "@/contexts/FeedbackContext";
import { api } from "@/utils/api";

const jost = Jost({ subsets: ["latin"] });

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <>
      <AppHead />

      <SessionProvider session={session}>
        <FeedbackProvider>
          <div
            className={`${jost.className} relative mx-auto min-h-screen w-full max-w-[1110px]`}
          >
            <Component {...pageProps} />
          </div>
        </FeedbackProvider>
      </SessionProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
