import { Jost } from "@next/font/google";

interface MainLayoutProps {
  children: React.ReactNode;
}

const jost = Jost({ subsets: ["latin"] });

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div
      className={`${jost.className} flex min-h-screen flex-col overflow-hidden md:max-h-screen md:flex-row`}
    >
      {children}
    </div>
  );
}
