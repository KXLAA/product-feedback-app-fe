import Link from "next/link";
import { useRouter } from "next/router";

import { Button } from "@/components/common/Button";
import { GoBack } from "@/components/common/GoBack";
import { AddComment } from "@/components/feedback/AddComment";
import { Comments } from "@/components/feedback/Comments";
import { FeedbackCard } from "@/components/home/FeedbackCard";
import { PageLayout } from "@/components/layout/PageLayout";

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
        <FeedbackCard {...mockFeedback} />

        <Comments />

        <AddComment />
      </div>
    </PageLayout>
  );
}

const mockFeedback = {
  id: "63e2004e-6334-490b-8880-685394da45a5",
  heading: "Add a dark theme option",
  content:
    "It would help people with light sensitivities and who prefer dark mode.",
  upvotes: 99,
  comments: 4,
  categories: ["Feature"],
};
