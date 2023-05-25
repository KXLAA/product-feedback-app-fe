import { Jost } from "@next/font/google";
import { useRouter } from "next/router";

import { Show } from "@/components/common/Show";
import { SideBar } from "@/components/home/SideBar";
import { FeedbackProvider } from "@/contexts/FeedbackContext";

interface MainLayoutProps {
  children: React.ReactNode;
}

const jost = Jost({ subsets: ["latin"] });

export function MainLayout({ children }: MainLayoutProps) {
  const router = useRouter();
  const isHome = router.pathname === "/";
  return (
    <div
      className={`${jost.className} relative mx-auto flex min-h-screen w-full max-w-[1110px] items-start justify-center gap-8`}
    >
      <Show when={isHome}>
        <SideBar />
      </Show>
      <FeedbackProvider>{children}</FeedbackProvider>
    </div>
  );
}
