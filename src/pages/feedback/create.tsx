import { Plus } from "lucide-react";

import { FormPageWrapper } from "@/components/layout/FormPageWrapper";

export default function CreateFeedback() {
  return (
    <FormPageWrapper
      heading="Create New Feedback"
      goBackLink="/"
      icon={<Plus />}
    >
      <h1>Create Feedback</h1>
    </FormPageWrapper>
  );
}
