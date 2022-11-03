import { type VariantProps, cva } from "class-variance-authority";
import React from "react";

const filter = cva(
  [
    "h-[30px]",
    "px-4",
    "flex",
    "items-center",
    "justify-center",
    "rounded-[10px]",
    "bg-blue-100",
    "text-blue-400",
    "font-bold",
    "text-sm",
    "border-transparent",
    "transition",
    "hover:bg-[##3A4374]",
  ],
  {
    variants: {
      active: {
        true: ["!bg-blue-500", "!text-white"],
      },
    },
  }
);

export interface FilterTagProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof filter> {
  children: React.ReactNode;
}

export function FilterTag({
  className,
  active,
  children,
  ...props
}: FilterTagProps) {
  return (
    <button className={filter({ active, class: className })} {...props}>
      {children}
    </button>
  );
}
