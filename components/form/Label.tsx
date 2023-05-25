import React from "react";
import { useField } from "react-aria";

import { Show } from "@/components/common/Show";

interface LabelProps {
  label: string;
  description?: string;
  children: React.ReactNode;
  error?: string;
  hidden?: boolean;
}

export function Label(props: LabelProps) {
  const { labelProps, fieldProps, descriptionProps, errorMessageProps } =
    useField(props);

  return (
    <fieldset
      className={`flex w-full flex-col gap-4 ${props.hidden ? "hidden" : ""}`}
    >
      <div className="flex flex-col">
        <label
          {...labelProps}
          className="block text-[14px] font-bold leading-[20px] tracking-[-0.2px] text-blue-400"
        >
          {props.label}
        </label>
        <span
          {...descriptionProps}
          className="text-[14px] leading-[20px] tracking-[-0.2px] text-blue-400"
        >
          {props.description}
        </span>
      </div>

      <LabelContext.Provider value={fieldProps}>
        <div className="flex flex-col gap-1">
          {props.children}
          <Show when={!!props.error}>
            <span
              {...errorMessageProps}
              className="text-[14px] leading-[20px] tracking-[-0.2px] text-red"
            >
              {props.error}
            </span>
          </Show>
        </div>
      </LabelContext.Provider>
    </fieldset>
  );
}

interface LabelContextType {
  id?: string;
  "aria-label"?: string;
  "aria-labelledby"?: string;
  "aria-describedby"?: string;
}

const LabelContext = React.createContext<LabelContextType>({});

export function useLabel() {
  const context = React.useContext(LabelContext);
  if (!context) {
    throw new Error("useLabel must be used within a LabelProvider");
  }
  return context;
}
