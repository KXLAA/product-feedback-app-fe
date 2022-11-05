export enum FeedbackCategory {
  Feature = "feature",
  UI = "ui",
  UX = "ux",
  Enhancement = "enhancement",
  Bug = "bug",
}

export enum FeedbackStatus {
  Planned = "planned",
  InProgress = "in-progress",
  Live = "live",
}

export type FeedbackType = {
  id: string;
  title: string;
  content: string;
  category: FeedbackCategory;
  status: FeedbackStatus;
  upvotes?: number;
  comments?: number;
};
