import { FadeInOut } from "components/animation/FadeInOut";

interface PageLayoutProps {
  children: React.ReactNode;
  noInitial?: boolean;
  className?: string;
}

export function PageLayout(props: PageLayoutProps) {
  return (
    <FadeInOut
      noInitial={props.noInitial}
      className={`flex h-full w-full flex-col items-center ${props.className}`}
    >
      {props.children}
    </FadeInOut>
  );
}
