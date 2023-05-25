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
    "text-blue-500",
    "font-bold",
    "text-sm",
    "border-transparent",
    "transition",
    "hover:bg-[#CFD7FF]",
  ],
  {
    variants: {
      active: {
        true: ["!bg-blue-500", "!text-white"],
      },
      nonInteractive: {
        true: ["hover:bg-blue-100"],
      },
    },
  }
);

export interface FilterTagProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof filter> {
  children: React.ReactNode;
  nonInteractive?: boolean;
}

export function FilterTag({
  className,
  active,
  children,
  nonInteractive,
  ...props
}: FilterTagProps) {
  if (nonInteractive) {
    return (
      <span
        className={filter({ class: className, nonInteractive: nonInteractive })}
        {...props}
      >
        {children}
      </span>
    );
  }
  return (
    <button className={filter({ active, class: className })} {...props}>
      {children}
    </button>
  );
}
