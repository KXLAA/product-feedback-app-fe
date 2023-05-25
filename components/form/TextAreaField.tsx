/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { cva } from "class-variance-authority";
import type { Control } from "react-hook-form";

import { Show } from "@/components/common/Show";
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
  hidden?: boolean;
}
export function TextAreaField(props: TextAreaFieldProps) {
  const form = useHandleForm(props);
  const { label, description, error, hidden, ...rest } = {
    ...form,
    ...props,
  };

  return (
    <Label
      label={label}
      description={description}
      error={error}
      hidden={hidden}
    >
      <Textarea {...rest} />

      <Show when={!!rest.maxLength}>
        <span className="text-left text-sm text-blue-200">
          {rest.maxLength! - (rest.value?.length || 0)} characters left
        </span>
      </Show>
    </Label>
  );
}

type TextAreaProps = Omit<TextAreaFieldProps, "label" | "description"> & {
  error?: string;
};

export function Textarea({ error, className, ...rest }: TextAreaProps) {
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
