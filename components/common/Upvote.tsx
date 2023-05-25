import { type VariantProps, cva } from "class-variance-authority";
import { ChevronUp } from "lucide-react";
import React from "react";

const upvoteIcon = cva(["text-blue-500"], {
  variants: {
    active: {
      true: ["text-white"],
    },
  },
});

const upvote = cva(
  [
    "h-[53px]",
    "w-10",
    "flex",
    "flex-col",
    "items-center",
    "justify-center",
    "gap-1",
    "rounded-[10px]",
    "bg-blue-100",
    "text-blue-400",
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
    },
    defaultVariants: {},
  }
);

export interface UpvoteProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof upvote> {
  children: React.ReactNode;
}

export function Upvote({ className, active, children, ...props }: UpvoteProps) {
  return (
    <button className={upvote({ active, class: className })} {...props}>
      <ChevronUp className={upvoteIcon({ active })} size={14} strokeWidth={3} />
      {children}
    </button>
  );
}
