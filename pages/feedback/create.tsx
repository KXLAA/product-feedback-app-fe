import { Plus } from "lucide-react";

import { Button } from "@/components/common/Button";
import { Form } from "@/components/form/Form";
import { useFeedbackForm } from "@/components/form/use-feedback";
import { FormPageWrapper } from "@/components/layout/FormPageWrapper";

export default function CreateFeedback() {
  const { form, crateFeedback } = useFeedbackForm();

  return (
    <FormPageWrapper
      heading="Create New Feedback"
      goBackLink="/"
      icon={<Plus />}
    >
      <Form {...form} />
      <div className="flex w-full justify-end gap-4">
        <Button
          intent="tertiary"
          className="w-fit !px-6"
          onClick={() => form.reset()}
        >
          Cancel
        </Button>
        <Button onClick={crateFeedback}>Add Feedback</Button>
      </div>
    </FormPageWrapper>
  );
}
