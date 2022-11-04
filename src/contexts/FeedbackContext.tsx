import { useRouter } from "next/router";
import React from "react";
import type {
  Control,
  DeepMap,
  FieldError,
  UseFormRegister,
  UseFormReset,
  UseFormSetValue,
} from "react-hook-form";
import { useForm, UseFormTrigger } from "react-hook-form";

type FeedbackFormValue = {
  heading: string;
  content: string;
  category: string;
  status?: string;
};

type FeedbackContextState = {
  feedbackId?: string;
  control: Control<FeedbackFormValue>;
  register: UseFormRegister<FeedbackFormValue>;
  errors: DeepMap<FeedbackFormValue, FieldError>;
  onSubmit: () => void;
  onReset: () => void;
  watch: (name?: string) => FeedbackFormValue;
  reset: UseFormReset<FeedbackFormValue>;
  setValue: UseFormSetValue<FeedbackFormValue>;
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
  const [selectedFilter, setSelectedFilter] = React.useState<string[]>([]);
  const handleFilter = (filter: string) => {
    if (filter === "all") {
      setSelectedFilter([]);
    } else {
      if (selectedFilter.includes(filter)) {
        setSelectedFilter(selectedFilter.filter((f) => f !== filter));
      } else {
        setSelectedFilter([...selectedFilter, filter]);
      }
    }
  };

  const CATEGORIES = [
    { label: "Feature", value: "feature" },
    { label: "UI", value: "ui" },
    { label: "UX", value: "ux" },
    { label: "Enhancement", value: "enhancement" },
    { label: "Bug", value: "bug" },
  ];

  const STATUS = [
    { label: "Planned", value: "planned" },
    { label: "In-Progress", value: "in-progress" },
    { label: "Live", value: "live" },
  ];

  return <>{props.children}</>;
}
