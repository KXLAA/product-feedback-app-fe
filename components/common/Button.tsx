import { type VariantProps, cva } from "class-variance-authority";
import React from "react";

const button = cva(
  [
    "h-11",
    "px-3",
    "font-bold",
    "text-[14px]",
    "leading-[20px]",
    "text-blue-100",
    "rounded-[10px]",
    "border-transparent",
    "transition",
    "max-w-[158px]",
    "w-full",
    "flex",
    "justify-center",
    "items-center",
    "whitespace-nowrap",
  ],
  {
    variants: {
      intent: {
        primary: ["bg-pink", "hover:bg-[#C75AF6]"],
        secondary: ["bg-blue-500", "hover:bg-[#7C91F9]"],
        tertiary: ["bg-blue-400", "hover:bg-[#656EA3]"],
        danger: ["bg-red", "hover:bg-[#E98888]"],
      },
      size: {
        // small: ["text-sm", "py-1", "px-2"],
        // medium: ["text-base", "py-2", "px-4"],
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  }
);

export interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  children: React.ReactNode;
}

export function Button({
  className,
  intent,
  size,
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={button({ intent, size, class: className })} {...props}>
      {children}
    </button>
  );
}
