import { Plus } from "lucide-react";

import { Button } from "@/components/common/Button";
import { Form } from "@/components/form/Form";
import { useFeedbackForm } from "@/components/form/use-feedback";
import { FormPageWrapper } from "@/components/layout/FormPageWrapper";
import { useFeedback } from "@/contexts/FeedbackContext";

export default function CreateFeedback() {
  const { fields, control } = useFeedbackForm();
  const { onSubmit } = useFeedback();

  return (
    <FormPageWrapper
      heading="Create New Feedback"
      goBackLink="/"
      icon={<Plus />}
    >
      <Form control={control} fields={fields} />

      <div className="flex w-full justify-end gap-4">
        <Button intent="tertiary" className="w-fit !px-6">
          Cancel
        </Button>
        <Button onClick={onSubmit}>Add Feedback</Button>
      </div>
    </FormPageWrapper>
  );
}
