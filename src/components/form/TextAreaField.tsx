import { cva } from "class-variance-authority";
import type { Control } from "react-hook-form";

import { useHandleForm } from "@/utils/use-handle-form";

import { Label, useLabel } from "./Label";

export interface TextAreaFieldProps {
  label: string;
  description: string;
  className?: string;
  name: string;
  control?: Control<any>;
  required?: boolean;
  maxLength?: number;
  defaultValue?: string;
}
export function TextAreaField(props: TextAreaFieldProps) {
  const form = useHandleForm(props);
  const { label, description, error, ...rest } = {
    ...form,
    ...props,
  };

  return (
    <Label label={label} description={description} error={error}>
      <Textarea {...rest} />
    </Label>
  );
}

type TextAreaProps = Omit<TextAreaFieldProps, "label" | "description"> & {
  error?: string;
};

function Textarea({ error, className, ...rest }: TextAreaProps) {
  const fieldProps = useLabel();
  return (
    <textarea
      className={inputStyles({
        error: !!error,
        class: className,
      })}
      {...fieldProps}
      {...rest}
    />
  );
}

const inputStyles = cva(
  [
    "w-full rounded-md bg-blue-50 p-4 text-base text-blue-400 shadow-sm transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500",
  ],
  {
    variants: {
      error: {
        true: ["focus:ring-red"],
      },
    },
  }
);
