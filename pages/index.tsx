import Link from "next/link";

import { Button } from "@/components/common/Button";
import { Header } from "@/components/common/Header";
import { Text } from "@/components/common/Text";
// import { EmptyFeedback } from "@/components/home/EmptyFeedback";
import { FeedbackCard } from "@/components/home/FeedbackCard";
import { InfoIcon } from "@/components/icons/InfoIcon";
import { PageLayout } from "@/components/layout/PageLayout";
import { mockFeedback } from "@/components/mocks";

export default function Home() {
  return (
    <PageLayout>
      <Header className="sticky top-8 flex h-[72px] items-center justify-between px-6">
        <div>
          <Text
            size="xl"
            className="flex items-center gap-4 font-bold text-white"
            as="div"
          >
            <InfoIcon />
            <span>6 Suggestions</span>
          </Text>
        </div>
        <Link href="/feedback/create">
          <Button>+ Add Feedback</Button>
        </Link>
      </Header>
      <div className="flex w-full flex-col gap-5">
        {mockFeedback.map((feedback) => (
          <FeedbackCard key={feedback.id} {...feedback} />
        ))}
      </div>
      {/* <EmptyFeedback /> */}
    </PageLayout>
  );
}
