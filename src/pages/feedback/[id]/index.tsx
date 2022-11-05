import Link from "next/link";
import { useRouter } from "next/router";

import { Button } from "@/components/common/Button";
import { GoBack } from "@/components/common/GoBack";
import { AddComment } from "@/components/feedback/AddComment";
import { Comments } from "@/components/feedback/Comments";
import { FeedbackCard } from "@/components/home/FeedbackCard";
import { PageLayout } from "@/components/layout/PageLayout";
import { mockFeedback } from "@/components/mocks";

export default function Feedback() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <PageLayout className="max-w-[720px]">
      <div className="mb-8 flex w-full justify-between">
        <GoBack href="/" />
        <Link href={`/feedback/${id}/edit`}>
          <Button intent="secondary">Edit Feedback</Button>
        </Link>
      </div>
      <div className="flex w-full flex-col gap-6">
        <FeedbackCard {...mockFeedback[0]!} />

        <Comments />

        <AddComment />
      </div>
    </PageLayout>
  );
}
