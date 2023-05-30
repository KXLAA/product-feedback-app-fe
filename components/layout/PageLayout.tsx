import { FadeInOut } from "@/components/animation/FadeInOut";
import { cx } from "@/utils/cx";

interface PageLayoutProps {
  children: React.ReactNode;
  noInitial?: boolean;
  className?: string;
}

export function PageLayout(props: PageLayoutProps) {
  return (
    <FadeInOut
      noInitial={props.noInitial}
      className={cx(
        `m-8 mx-auto flex h-full w-full flex-col items-center ${props.className}`
      )}
    >
      {props.children}
    </FadeInOut>
  );
}
