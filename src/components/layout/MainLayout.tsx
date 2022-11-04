import { Jost } from "@next/font/google";
import { useRouter } from "next/router";

import { RenderIf } from "@/components/common/RenderIf";
import { SideBar } from "@/components/home/SideBar";

interface MainLayoutProps {
  children: React.ReactNode;
}

const jost = Jost({ subsets: ["latin"] });

export function MainLayout({ children }: MainLayoutProps) {
  const router = useRouter();
  const isHome = router.pathname === "/";
  return (
    <div className={`${jost.className} flex min-h-screen pb-6`}>
      <div className="relative mx-auto flex w-full max-w-[1110px] flex-col items-start justify-center gap-8 md:flex-row">
        <RenderIf condition={isHome}>
          <SideBar />
        </RenderIf>
        <div className="h-full w-full">{children}</div>
      </div>
    </div>
  );
}
