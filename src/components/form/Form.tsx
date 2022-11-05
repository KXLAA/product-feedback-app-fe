import type { Control } from "react-hook-form";

import type { SelectFieldProps } from "./SelectField";
import { SelectField } from "./SelectField";
import type { TextAreaFieldProps } from "./TextAreaField";
import { TextAreaField } from "./TextAreaField";
import type { TextInputFieldProps } from "./TextInputField";
import { TextInputField } from "./TextInputField";

export enum FormFieldType {
  Input = "INPUT",
  Select = "SELECT",
  Textarea = "TEXTAREA",
}

type Field = {
  type: FormFieldType;
  name: string;
  label: string;
  error?: string;
  onChange?: (...event: any[]) => void;
};

export interface InputField extends Field, TextInputFieldProps {
  type: FormFieldType.Input;
}

export interface TextAreaField extends Field, TextAreaFieldProps {
  type: FormFieldType.Textarea;
}

export interface SelectField extends Field, SelectFieldProps {
  type: FormFieldType.Select;
}

export type FormField = InputField | TextAreaField | SelectField;
export type FormFieldList = Array<FormField>;

export interface FormProps {
  fields: FormFieldList;
  control: Control<any>;
}

export function Form(props: FormProps) {
  const { fields, control } = props;

  return (
    <>
      {fields.map((field) => {
        switch (field.type) {
          case FormFieldType.Input:
            return (
              <TextInputField key={field.name} control={control} {...field} />
            );
          case FormFieldType.Textarea:
            return (
              <TextAreaField key={field.name} control={control} {...field} />
            );
          case FormFieldType.Select:
            return (
              <SelectField key={field.name} control={control} {...field} />
            );
          default:
            return null;
        }
      })}
    </>
  );
}
