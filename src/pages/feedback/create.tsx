import { yupResolver } from "@hookform/resolvers/yup";
import { Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { Button } from "@/components/common/Button";
import { SelectField } from "@/components/form/SelectField";
import { TextAreaField } from "@/components/form/TextAreaField";
import { TextInputField } from "@/components/form/TextInputField";
import { FormPageWrapper } from "@/components/layout/FormPageWrapper";
import { FeedbackCategory } from "@/types";

const CATEGORIES = [
  { label: "Feature", value: "feature" },
  { label: "UI", value: "ui" },
  { label: "UX", value: "ux" },
  { label: "Enhancement", value: "enhancement" },
  { label: "Bug", value: "bug" },
];

const schema = yup.object().shape({
  description: yup.string().required("Cant be empty"),
  category: yup
    .mixed<FeedbackCategory>()
    .oneOf(Object.values(FeedbackCategory)),
});

export default function CreateFeedback() {
  const { handleSubmit, control } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <FormPageWrapper
      heading="Create New Feedback"
      goBackLink="/"
      icon={<Plus />}
    >
      <TextInputField
        name="heading"
        control={control}
        label="Feedback Title"
        description="Add a short, descriptive headline"
      />

      <SelectField
        name="category"
        control={control}
        label="Category"
        description="Choose a category for your feedback"
        options={[...CATEGORIES]}
        defaultValue="bug"
      />

      <TextAreaField
        control={control}
        name="description"
        label="Feedback Detail"
        description="Include any specific comments on what should be improved, added, etc."
        className="h-24"
        required
      />

      <div className="flex w-full justify-end gap-4">
        <Button intent="tertiary" className="w-fit !px-6">
          Cancel
        </Button>
        <Button onClick={handleSubmit(onSubmit)}>Add Feedback</Button>
      </div>
    </FormPageWrapper>
  );
}
