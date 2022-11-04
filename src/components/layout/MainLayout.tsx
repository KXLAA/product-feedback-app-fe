import { Jost } from "@next/font/google";
import { useRouter } from "next/router";

import { SideBar } from "@/components/home/SideBar";

interface MainLayoutProps {
  children: React.ReactNode;
}

const jost = Jost({ subsets: ["latin"] });

export function MainLayout({ children }: MainLayoutProps) {
  const router = useRouter();
  const isHome = router.pathname === "/";
  return (
    <div className={`${jost.className} flex  min-h-screen pb-6`}>
      {isHome ? (
        <div className="relative m-auto flex w-full max-w-[1110px] items-start gap-8">
          <SideBar />
          <div className="flex w-full flex-col gap-6 ">{children}</div>
        </div>
      ) : (
        <div className="flex w-full flex-col gap-6">{children}</div>
      )}
    </div>
  );
}
