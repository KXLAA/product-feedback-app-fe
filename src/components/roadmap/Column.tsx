import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { cva } from "class-variance-authority";
import React from "react";

import { CommentButton } from "@/components/common/CommentButton";
import { FilterTag } from "@/components/common/FilterTag";
import { Text } from "@/components/common/Text";
import { Upvote } from "@/components/common/Upvote";
import type { FeedbackType } from "@/types";

interface ColumnProps {
  id: string;
  heading: string;
  description: string;
  feedback: FeedbackType[];
}
export function Column({ id, heading, description, feedback }: ColumnProps) {
  const { setNodeRef, isOver } = useDroppable({
    id,
  });

  return (
    <div className="flex w-full max-w-[350px] flex-col gap-8 ">
      <div>
        <Text size="xl" className="font-bold text-blue-400">
          {heading} ({feedback.length})
        </Text>
        <Text size="lg" className=" text-blue-200">
          {description}
        </Text>
      </div>
      <SortableContext
        id={id}
        items={feedback}
        strategy={verticalListSortingStrategy}
      >
        <div
          ref={setNodeRef}
          className={`} flex h-full w-full flex-col
          gap-6`}
        >
          {feedback.map((item) => (
            <SortableItem key={item.id} {...item} />
          ))}
        </div>
      </SortableContext>
    </div>
  );
}

function SortableItem(props: FeedbackType) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${Math.round(
          transform.y
        )}px, 0) scaleX(${transform.scaleX})`
      : "",
    transition,
  };
  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <FeedbackCard {...props} />
    </div>
  );
}

function FeedbackCard({
  id,
  title,
  content,
  status,
  category,
  upvotes,
  comments,
}: FeedbackType) {
  return (
    <div
      className={feedbackCardStyles({
        status: status,
      })}
    >
      <Text className="flex items-center gap-4" as="div">
        <div
          className={statusDot({
            status: status,
          })}
        />
        {capitalize(status)}
      </Text>

      <div>
        <Text size="xl" className="font-bold text-blue-400" as="div">
          {title}
        </Text>
        <Text size="lg" className="text-blue-200" as="div">
          {content}
        </Text>
      </div>

      <FilterTag nonInteractive className="w-fit">
        {category}
      </FilterTag>

      <div className="flex justify-between">
        <Upvote>{upvotes}</Upvote>
        <CommentButton href={`/feedback/${id}`} comments={comments} />
      </div>
    </div>
  );
}

const feedbackCardStyles = cva(
  [
    "border-t-[6px]",
    "w-full",
    "rounded-md",
    "p-8",
    "flex",
    "flex-col",
    "gap-4",
    "bg-white",
  ],
  {
    variants: {
      status: {
        planned: ["border-t-orange"],
        "in-progress": ["border-t-pink"],
        live: ["border-t-blue-600"],
      },
    },
  }
);

const statusDot = cva(["w-2", "h-2", "rounded-full", "shrink-0"], {
  variants: {
    status: {
      planned: ["bg-orange"],
      "in-progress": ["bg-pink"],
      live: ["bg-blue-600"],
    },
  },
});

function capitalize(str: string) {
  return str
    .split("-")
    .map((word) => word[0]?.toUpperCase() + word.slice(1))
    .join(" ");
}
