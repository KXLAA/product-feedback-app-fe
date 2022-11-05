import Link from "next/link";

import { CommentButton } from "@/components/common/CommentButton";
import { FilterTag } from "@/components/common/FilterTag";
import { Text } from "@/components/common/Text";
import { Upvote } from "@/components/common/Upvote";

interface FeedbackCardProps {
  id: string;
  title: string;
  content: string;
  upvotes?: number;
  comments?: number;
  category: string;
}

export function FeedbackCard({
  upvotes,
  title,
  content,
  category,
  comments,
  id,
}: FeedbackCardProps) {
  return (
    <div className="flex w-full justify-between rounded bg-white py-7 px-8 shadow-sm">
      <div className="flex gap-10">
        <Upvote>{upvotes}</Upvote>
        <div>
          <Link href={`/feedback/${id}`}>
            <Text
              size="xl"
              className="mb-1 font-bold text-blue-400 transition hover:opacity-50"
            >
              {title}
            </Text>
          </Link>

          <Text size="lg" className="text-blue-400">
            {content}
          </Text>

          <FilterTag nonInteractive className="mt-3 w-fit" key={category}>
            {category}
          </FilterTag>
        </div>
      </div>

      <CommentButton href={`/feedback/${id}`} comments={comments} />
    </div>
  );
}
