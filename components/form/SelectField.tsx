import { Listbox, Transition } from "@headlessui/react";
import { Check, ChevronDown } from "lucide-react";
import React from "react";
import type { Control } from "react-hook-form";

import { useHandleForm } from "@/utils/use-handle-form";

import { Label, useLabel } from "./Label";

export interface SelectFieldProps {
  label: string;
  description: string;
  error?: string;
  options: {
    label: string;
    value: string;
  }[];
  defaultValue?: string;
  control?: Control<any>;
  name: string;
  hidden?: boolean;
}

export function SelectField(props: SelectFieldProps) {
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
      <Select {...rest} />
    </Label>
  );
}

type SelectProps = Omit<SelectFieldProps, "label" | "description"> & {
  onChange?: (...event: any[]) => void;
};

function Select({ options, defaultValue, ...rest }: SelectProps) {
  const value = options.find((o) => o.value === defaultValue);
  const [selected, setSelected] = React.useState(value || options[0]);
  const fieldProps = useLabel();

  return (
    <Listbox
      value={selected}
      onChange={(obj) => {
        setSelected(obj);
        rest?.onChange?.(obj.value);
      }}
    >
      <div className="relative">
        <Listbox.Button
          className="focus-visible:ring-offset-orange-300 relative h-[48px] w-full cursor-default rounded-md bg-blue-50  px-4 text-left text-base text-blue-400 shadow-sm transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus-visible:border-blue-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 "
          {...fieldProps}
        >
          <span className="block truncate">{selected?.label}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronDown className="h-5 w-5 text-blue-500" aria-hidden="true" />
          </span>
        </Listbox.Button>
        <Transition
          as={React.Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute z-10  mt-4 max-h-60 w-full overflow-auto rounded bg-white text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {options.map((option, index) => (
              <Listbox.Option
                key={index}
                className={({ active }) =>
                  `relative cursor-default select-none border-b border-blue-100 py-3 px-6 last:border-b-0 ${
                    active ? "text-pink" : "text-blue-200"
                  }`
                }
                value={option}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {option.label}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 right-0 flex items-center pr-8">
                        <Check
                          className="h-5 w-5 text-pink"
                          aria-hidden="true"
                        />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}
