import { cva } from "class-variance-authority";
import Link from "next/link";
import React from "react";

import { CommentIcon } from "@/components/common/CommentIcon";
import { FilterTag } from "@/components/common/FilterTag";
import { Text } from "@/components/common/Text";
import { Upvote } from "@/components/common/Upvote";

interface FeedbackCardProps {
  heading: string;
  content: string;
  upvotes: number;
  comments: number;
  commentLink: string;
  categories: string[];
}

export function FeedbackCard({
  upvotes,
  heading,
  content,
  categories,
  comments,
  commentLink,
}: FeedbackCardProps) {
  return (
    <div className="flex w-full justify-between rounded bg-white py-7 px-8 shadow-sm">
      <div className="flex gap-10">
        <Upvote>{upvotes}</Upvote>
        <div>
          <Text size="xl" className="mb-1 font-bold text-blue-400">
            {heading}
          </Text>
          <Text size="lg" className="text-blue-400">
            {content}
          </Text>
          <div className="flex gap-2">
            {categories.map((category) => (
              <FilterTag nonInteractive className="mt-3 w-fit" key={category}>
                {category}
              </FilterTag>
            ))}
          </div>
        </div>
      </div>
      <Link href={commentLink} className={comment({ empty: comments === 0 })}>
        <CommentIcon />
        <Text size="lg" className="font-bold text-blue-400">
          {comments}
        </Text>
      </Link>
    </div>
  );
}

const comment = cva(["flex items-center gap-2"], {
  variants: {
    empty: {
      true: ["opacity-50"],
    },
  },
});
