import Link from "next/link";

import { Button } from "@/components/common/Button";
import { Text } from "@/components/common/Text";
import { EmptyFeedback } from "@/components/home/EmptyFeedback";
import { FeedbackCard } from "@/components/home/FeedbackCard";
import { SideBar } from "@/components/home/SideBar";
import { InfoIcon } from "@/components/icons/InfoIcon";
import { PageLayout } from "@/components/layout/PageLayout";
import { mockFeedback } from "@/components/mocks";

function Header() {
  return (
    <div
      className={`sticky top-8 mb-6 flex h-[72px] w-full items-center justify-between rounded bg-blue-300 px-6`}
    >
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
    </div>
  );
}

export default function HomePage() {
  return (
    <PageLayout className="flex-row items-start justify-center gap-8">
      <SideBar />
      <div className="w-full">
        <Header />
        <div className="flex w-full flex-col gap-5">
          {mockFeedback.map((feedback) => (
            <FeedbackCard key={feedback.id} {...feedback} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
