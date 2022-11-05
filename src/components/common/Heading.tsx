import { cva } from "class-variance-authority";

const heading = cva(["font-bold"], {
  variants: {
    size: {
      h1: ["text-2xl", "leading-[35px]", "tracking-[-0.33px]"],
      h2: ["text-xl", "leading-[29px]", "tracking-[-0.25px]"],
      h3: ["text-[18px]", "leading-[26px]", "tracking-[-0.25px]"],
      h4: ["text-[14px]", "leading-[20px]", "tracking-[-0.2px]"],
    },
  },
  defaultVariants: {
    size: "h1",
  },
});

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4";
}

export function Heading({
  children,
  as = "h1",
  className,
  ...props
}: HeadingProps) {
  const Element = as as React.ElementType;

  return (
    <Element
      {...props}
      className={heading({
        size: as,
        class: className,
      })}
    >
      {children}
    </Element>
  );
}
