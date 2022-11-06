import { Plus } from "lucide-react";
import { useRouter } from "next/router";

import { FormPageWrapper } from "@/components/layout/FormPageWrapper";

export default function EditFeedback() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <FormPageWrapper
      heading="Edit Feedback"
      goBackLink={`/feedback/${id}`}
      icon={<Plus />}
    >
      <h1>Edit Feedback</h1>
    </FormPageWrapper>
  );
}
