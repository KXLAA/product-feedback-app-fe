import type { FeedbackType } from "@/types";
import { FeedbackCategory, FeedbackStatus } from "@/types";

export const mockFeedback: Array<FeedbackType> = [
  {
    id: "63e2004e-6334-490b-8880-685394da45a5",
    title: "Add a dark theme option",
    content:
      "It would help people with light sensitivities and who prefer dark mode.",
    upvotes: 99,
    comments: 4,
    category: FeedbackCategory.Feature,
    status: FeedbackStatus.Live,
  },
  {
    id: "50e2e305-5839-4a5e-90b3-b51fbb3ca36e",
    title: "Q&A within the challenge hubs",
    content: "Challenge-specific Q&A would make for easy reference.",
    upvotes: 65,
    comments: 1,
    category: FeedbackCategory.Feature,
    status: FeedbackStatus.Planned,
  },
  {
    id: "1e2ff77c-b839-4b82-95bf-2d103e9dd44b",
    title: "Allow image/video upload ",
    content: "Images and screencasts can enhance comments on solutions.",
    upvotes: 52,
    comments: 2,
    category: FeedbackCategory.Feature,
    status: FeedbackStatus.InProgress,
  },
  {
    id: "f484c1ec-6a09-4190-b72b-3415ccf98bb4",
    title: "Ability to follow others",
    content: "Stay updated on comments and solutions other people post.",
    upvotes: 42,
    comments: 3,
    category: FeedbackCategory.Enhancement,
    status: FeedbackStatus.Live,
  },
  {
    id: "a36405d7-64a8-4cd7-80ce-435715c2b3b6",
    title: "Preview images not loading",
    content: "Challenge preview images are missing when you apply a filter.",
    upvotes: 3,
    comments: 0,
    category: FeedbackCategory.Bug,
    status: FeedbackStatus.Live,
  },
];
