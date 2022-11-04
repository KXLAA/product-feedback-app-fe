import { cva } from "class-variance-authority";
import type { Control } from "react-hook-form";

import { useHandleForm } from "@/utils/use-handle-form";

import { Label, useLabel } from "./Label";

export interface TextInputFieldProps {
  label: string;
  description: string;
  error?: string;
  control?: Control<any>;
  name: string;
  defaultValue?: string;
}
export function TextInputField(props: TextInputFieldProps) {
  const form = useHandleForm(props);
  const { label, description, error, ...rest } = {
    ...form,
    ...props,
  };

  return (
    <Label label={label} description={description} error={error}>
      <Input {...rest} />
    </Label>
  );
}

function Input({
  error,
  ...rest
}: Omit<TextInputFieldProps, "label" | "description">) {
  const fieldProps = useLabel();
  return (
    <input
      type="text"
      className={inputStyles({
        error: !!error,
      })}
      {...fieldProps}
      {...rest}
    />
  );
}

const inputStyles = cva(
  [
    "h-[48px] w-full rounded-md bg-blue-50 px-4 text-base text-blue-400 shadow-sm transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500",
  ],
  {
    variants: {
      error: {
        true: ["focus:ring-red"],
      },
    },
  }
);
