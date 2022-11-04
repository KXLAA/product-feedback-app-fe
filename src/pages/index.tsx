import Link from "next/link";

import { Button } from "@/components/common/Button";
import { Header } from "@/components/common/Header";
import { Text } from "@/components/common/Text";
// import { EmptyFeedback } from "@/components/home/EmptyFeedback";
import { FeedbackCard } from "@/components/home/FeedbackCard";
import { InfoIcon } from "@/components/icons/InfoIcon";

export default function Home() {
  return (
    <>
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
      <div className="mt-6 flex w-full flex-col gap-5">
        {mockFeedback.map((feedback) => (
          <FeedbackCard key={feedback.id} {...feedback} />
        ))}
      </div>
      {/* <EmptyFeedback /> */}
    </>
  );
}

const mockFeedback = [
  {
    id: "63e2004e-6334-490b-8880-685394da45a5",
    heading: "Add a dark theme option",
    content:
      "It would help people with light sensitivities and who prefer dark mode.",
    upvotes: 99,
    comments: 4,
    categories: ["Feature"],
  },
  {
    id: "50e2e305-5839-4a5e-90b3-b51fbb3ca36e",
    heading: "Q&A within the challenge hubs",
    content: "Challenge-specific Q&A would make for easy reference.",
    upvotes: 65,
    comments: 1,
    categories: ["Feature"],
  },
  {
    id: "1e2ff77c-b839-4b82-95bf-2d103e9dd44b",
    heading: "Allow image/video upload ",
    content: "Images and screencasts can enhance comments on solutions.",
    upvotes: 52,
    comments: 2,
    categories: ["Enhancement"],
  },
  {
    id: "f484c1ec-6a09-4190-b72b-3415ccf98bb4",
    heading: "Ability to follow others",
    content: "Stay updated on comments and solutions other people post.",
    upvotes: 42,
    comments: 3,
    categories: ["Feature", "Enhancement"],
  },
  {
    id: "a36405d7-64a8-4cd7-80ce-435715c2b3b6",
    heading: "Preview images not loading",
    content: "Challenge preview images are missing when you apply a filter.",
    upvotes: 3,
    comments: 0,
    categories: ["Bug"],
  },
];
