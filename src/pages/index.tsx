import { Button } from "@/components/common/Button";
import { Header } from "@/components/common/Header";
import { InfoIcon } from "@/components/common/InfoIcon";
import { Text } from "@/components/common/Text";
import { FeedbackCard } from "@/components/home/FeedbackCard";

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
        <Button>Add Feedback</Button>
      </Header>
      <div className="mt-6 flex w-full flex-col gap-5">
        {mockFeedback.map((feedback) => (
          <FeedbackCard key={feedback.heading} {...feedback} />
        ))}
      </div>
    </>
  );
}

const mockFeedback = [
  {
    heading: "Add a dark theme option",
    content:
      "It would help people with light sensitivities and who prefer dark mode.",
    upvotes: 99,
    comments: 4,
    commentLink: "/comments",
    categories: ["Feature"],
  },
  {
    heading: "Q&A within the challenge hubs",
    content: "Challenge-specific Q&A would make for easy reference.",
    upvotes: 65,
    comments: 1,
    commentLink: "/comments",
    categories: ["Feature"],
  },
  {
    heading: "Allow image/video upload ",
    content: "Images and screencasts can enhance comments on solutions.",
    upvotes: 52,
    comments: 2,
    commentLink: "/comments",
    categories: ["Enhancement"],
  },
  {
    heading: "Ability to follow others",
    content: "Stay updated on comments and solutions other people post.",
    upvotes: 42,
    comments: 3,
    commentLink: "/comments",
    categories: ["Feature", "Enhancement"],
  },
  {
    heading: "Preview images not loading",
    content: "Challenge preview images are missing when you apply a filter.",
    upvotes: 3,
    comments: 0,
    commentLink: "/comments",
    categories: ["Bug"],
  },
];
