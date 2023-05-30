import { useFeedback } from "@/contexts/FeedbackContext";
import { FeedbackCategory, FeedbackStatus } from "@/types";

import type { InputField, SelectField, TextAreaField } from "./Form";
import { FormFieldType } from "./Form";

export function useFeedbackForm() {
  const {
    form: { control, errors, reset },
    actions: { onSubmit },
  } = useFeedback();

  const heading: InputField = {
    type: FormFieldType.Input,
    name: "title",
    label: "Feedback Title",
    description: "Add a short, descriptive headline",
    error: errors.title?.message,
  };

  const content: TextAreaField = {
    type: FormFieldType.Textarea,
    name: "content",
    label: "Feedback Detail",
    description:
      "Include any specific comments on what should be improved, added, etc.",
    className: "h-24",
    error: errors.content?.message,
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
    error: errors.category?.message,
  };

  const status: SelectField = {
    type: FormFieldType.Select,
    name: "status",
    label: "Update Status",
    description: "Change feature state",
    options: [
      { label: "Planned", value: FeedbackStatus.Planned },
      { label: "In-Progress", value: FeedbackStatus.InProgress },
      { label: "Live", value: FeedbackStatus.Live },
    ],
    defaultValue: "planned",
    error: errors.status?.message,
  };

  const fields = [heading, content, status, category];

  return {
    form: { fields, control, reset },
    crateFeedback: onSubmit,
  };
}
