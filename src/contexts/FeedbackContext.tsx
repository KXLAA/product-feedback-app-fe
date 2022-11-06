import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import React from "react";
import type {
  Control,
  FieldErrorsImpl,
  UseFormRegister,
} from "react-hook-form";
import { useForm } from "react-hook-form";
import * as yup from "yup";

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
  control: Control<FeedbackFormValue>;
  register: UseFormRegister<FeedbackFormValue>;
  errors: FieldErrorsImpl<FeedbackFormValue>;
  onSubmit: () => void;
  watch: (name?: string) => FeedbackFormValue;
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
  const router = useRouter();
  // const [selectedFilter, setSelectedFilter] = React.useState<string[]>([]);
  // const handleFilter = (filter: string) => {
  //   if (filter === "all") {
  //     setSelectedFilter([]);
  //   } else {
  //     if (selectedFilter.includes(filter)) {
  //       setSelectedFilter(selectedFilter.filter((f) => f !== filter));
  //     } else {
  //       setSelectedFilter([...selectedFilter, filter]);
  //     }
  //   }
  // };

  const {
    control,
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FeedbackFormValue>({
    // defaultValues: getFormDefaultValues(theme),
    resolver: yupResolver(validationSchema),
  });

  // const onReset = (defaultValue?: FeedbackFormValue) => {
  //   reset({
  //     ...{},
  //     ...(defaultValue || {}),
  //   });
  // };

  const onSubmit = handleSubmit(async (values: FeedbackFormValue) => {
    console.log(values);
  });

  return (
    <FeedbackContext.Provider
      value={{
        control,
        register,
        errors,
        onSubmit,
        watch,
      }}
    >
      {props.children}
    </FeedbackContext.Provider>
  );
}
