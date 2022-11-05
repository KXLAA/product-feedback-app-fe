import { type VariantProps, cva } from "class-variance-authority";
import { ChevronLeft } from "lucide-react";
import NextLink from "next/link";

const gobackIcon = cva(["shrink-0"], {
  variants: {
    variant: {
      naked: ["text-blue-500"],
      fill: ["text-[#CDD2EE]"],
    },
  },
  defaultVariants: {
    variant: "naked",
  },
});

const goback = cva(
  [
    "flex",
    "font-bold",
    "text-[14px]",
    "leading-[20px]",
    "items-center",
    "gap-2",
    "border-transparent",
    "transition",
  ],
  {
    variants: {
      variant: {
        naked: ["text-blue-400", "hover:text-[#647196]", "hover:underline"],
        fill: [
          "text-white",
          "h-[53px]",
          "max-w-[158px]",
          "w-full",
          "px-3",
          "bg-blue-300",
          "rounded-[10px]",
          "hover:underline",
          "justify-center",
        ],
      },
    },
    defaultVariants: {
      variant: "naked",
    },
  }
);

export interface LinkProps
  extends React.HTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof goback> {
  href: string;
}

export function GoBack({ className, variant, ...props }: LinkProps) {
  return (
    <NextLink className={goback({ variant, class: className })} {...props}>
      <ChevronLeft
        size={10}
        className={gobackIcon({ variant })}
        strokeWidth={3}
        aria-hidden
      />
      Go Back
    </NextLink>
  );
}
