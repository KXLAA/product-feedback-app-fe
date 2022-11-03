import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

const text = cva(["text-blue-400"], {
  variants: {
    size: {
      sm: ["text-sm", "font-semibold"],
      md: ["text-base", "font-normal"],
      lg: ["text-lg", "font-normal"],
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
