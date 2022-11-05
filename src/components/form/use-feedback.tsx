import { FeedbackCategory } from "@/types";

import type { InputField, SelectField, TextAreaField } from "./Form";
import { FormFieldType } from "./Form";

export function useFeedback() {
  const heading: InputField = {
    type: FormFieldType.Input,
    name: "heading",
    label: "Feedback Title",
    description: "Add a short, descriptive headline",
    error: "error",
  };

  const content: TextAreaField = {
    type: FormFieldType.Textarea,
    name: "content",
    label: "Feedback Detail",
    description:
      "Include any specific comments on what should be improved, added, etc.",
    className: "h-24",
    error: "error",
  };

  const category: SelectField = {
    type: FormFieldType.Select,
    name: "category",
    label: "Category",
    description: "Choose a category for your feedback",
    options: [
      { label: "Feature", value: FeedbackCategory.Feature },
      { label: "UI", value: FeedbackCategory.UI },
      { label: "UX", value: FeedbackCategory.UX },
      { label: "Enhancement", value: FeedbackCategory.Enhancement },
      { label: "Bug", value: FeedbackCategory.Bug },
    ],
    defaultValue: "bug",
    error: "error",
  };

  const fields = [heading, content, category];

  return {
    fields,
  };
}
