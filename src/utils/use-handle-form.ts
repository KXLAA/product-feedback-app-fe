import type { Control, Noop, RefCallBack } from "react-hook-form";
import { useController } from "react-hook-form";

type Args = {
  control?: Control<any>;
  name: string;
  defaultValue?: any;
  required?: boolean;
  maxLength?: number;
};

type Return = {
  value?: any;
  ref?: RefCallBack;
  onChange?: (...event: any[]) => void;
  onBlur?: Noop;
  name: string;
  error?: string;
};

/** This hook is a wrapper around the react-hook-form useController hook.
 * it registers an input field with react-hook-form
 * */
function useHandleForm(props: Args): Return {
  const { name, control, required, defaultValue, maxLength } = props;

  let properties = {} as Return;
  if (control) {
    const {
      field: { ref, ...inputProps },
      fieldState: { error },
      // eslint-disable-next-line react-hooks/rules-of-hooks
    } = useController({
      name: name,
      control: control,
      rules: { required: required, maxLength: maxLength },
      defaultValue: defaultValue || "",
    });

    console.log;

    properties = {
      ref,
      ...inputProps,
      error: error?.message,
    };
  }

  return properties;
}

export { useHandleForm };
