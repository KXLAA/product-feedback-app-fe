import { FadeInOut } from "components/animation/FadeInOut";

interface PageLayoutProps {
  children: React.ReactNode;
  noInitial?: boolean;
}

export function PageLayout(props: PageLayoutProps) {
  return (
    <FadeInOut noInitial={props.noInitial} className="h-full w-full">
      {props.children}
    </FadeInOut>
  );
}
