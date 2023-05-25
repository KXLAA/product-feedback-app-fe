import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

const text = cva([], {
  variants: {
    size: {
      sm: ["text-sm"],
      md: ["text-base"],
      lg: ["text-lg"],
      xl: ["text-xl"],
      "2xl": ["text-2xl"],
      "3xl": ["text-3xl"],
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export interface TextProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof text> {
  children: React.ReactNode;
  as?: React.ElementType;
}

export function Text({
  children,
  as = "p",
  size,
  className,
  ...props
}: TextProps) {
  const Element = as;

  return (
    <Element
      {...props}
      className={text({
        size,
        class: className,
      })}
    >
      {children}
    </Element>
  );
}
