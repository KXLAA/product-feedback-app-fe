import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

const heading = cva(["text-blue-400", "font-bold"], {
  variants: {
    size: {
      xl: ["text-2xl", "leading-[35px]", "tracking-[-0.33px]"],
      lg: ["text-xl", "leading-[29px]", "tracking-[-0.25px]"],
      md: ["text-[18px]", "leading-[26px]", "tracking-[-0.25px]"],
      sm: ["text-[14px]", "leading-[20px]", "tracking-[-0.2px]"],
    },
  },
  defaultVariants: {
    size: "xl",
  },
});

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof heading> {
  children: React.ReactNode;
  as?: React.ElementType;
}

export function Heading({
  children,
  as = "h1",
  size,
  className,
  ...props
}: HeadingProps) {
  const Element = as;

  return (
    <Element
      {...props}
      className={heading({
        size,
        class: className,
      })}
    >
      {children}
    </Element>
  );
}
