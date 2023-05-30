import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import type {
  Control,
  FieldErrorsImpl,
  UseFormRegister,
  UseFormReset,
  UseFormSetValue,
  UseFormTrigger,
} from "react-hook-form";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import type { FeedbackType } from "@/types";
import { FeedbackCategory, FeedbackStatus } from "@/types";

const validationSchema = yup.object().shape({
  title: yup.string().required("Cant be empty"),
  content: yup.string().required("Cant be empty"),
  category: yup
    .mixed<FeedbackCategory>()
    .oneOf(Object.values(FeedbackCategory)),
  status: yup.mixed<FeedbackStatus>().oneOf(Object.values(FeedbackStatus)),
});

type FeedbackFormValue = {
  title: string;
  content: string;
  category?: FeedbackCategory;
  status?: FeedbackStatus;
};

type FeedbackContextState = {
  state?: {
    feedbackId: string;
    feedback: FeedbackType;
    feedbackLoading?: boolean;
  };
  actions: {
    onSubmit: () => Promise<void>;
    onReset: () => void;
  };
  form: {
    control: Control<FeedbackFormValue>;
    register: UseFormRegister<FeedbackFormValue>;
    errors: FieldErrorsImpl<FeedbackFormValue>;
    trigger: UseFormTrigger<FeedbackFormValue>;
    reset: UseFormReset<FeedbackFormValue>;
    watch: (name?: string) => FeedbackFormValue;
    isDirty: boolean;
    dirtyFields: Partial<
      Readonly<{
        [K in keyof FeedbackFormValue]: boolean | undefined;
      }>
    >;
    setValue: UseFormSetValue<FeedbackFormValue>;
  };
};

const FeedbackContext = React.createContext<FeedbackContextState>(
  {} as FeedbackContextState
);

export function useFeedback() {
  const context = React.useContext(FeedbackContext);
  if (!context) {
    throw new Error("useFeedback must be used within a FeedbackProvider");
  }
  return context;
}

export function FeedbackProvider(props: { children: React.ReactNode }) {
  const {
    control,
    register,
    handleSubmit,
    watch,
    reset,
    trigger,
    setValue,
    formState: { errors, isDirty, dirtyFields },
  } = useForm<FeedbackFormValue>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = handleSubmit(async (values: FeedbackFormValue) => {
    console.log(values);
  });

  return (
    <FeedbackContext.Provider
      value={{
        form: {
          control,
          register,
          errors,
          trigger,
          reset,
          isDirty,
          dirtyFields,
          setValue,
          watch,
        },
        actions: {
          onSubmit,
          onReset: reset,
        },
      }}
    >
      {props.children}
    </FeedbackContext.Provider>
  );
}
