import React from "react";

import { motion } from "@/components/animation/motion";
import { Button } from "@/components/common/Button";
import { Show } from "@/components/common/Show";
import { Text } from "@/components/common/Text";
import { Textarea } from "@/components/form/TextAreaField";

export function Comments() {
  return (
    <div className="flex w-full flex-col gap-6 rounded bg-white px-8 pt-6 pb-10 shadow-sm">
      <Text size="xl" className="font-bold text-blue-400">
        4 Comments
      </Text>
      <Comment />
      <Comment divider />
      <Comment divider />
      <Comment divider />
      <Comment divider />
    </div>
  );
}

interface CommentProps {
  divider?: boolean;
}

function Comment({ divider }: CommentProps) {
  const [isReplying, setIsReplying] = React.useState(false);

  return (
    <>
      <Show when={divider}>
        <Divider />
      </Show>

      <div className="relative flex w-full items-start gap-8">
        <div className="h-10 w-10 shrink-0 rounded-full bg-gray-400" />

        <div className="flex w-full flex-col gap-4">
          <div className="flex w-full items-start justify-between">
            <div>
              <Text className="font-bold text-blue-400">Elijah Moss</Text>
              <Text className=" text-blue-400">@hexagon.bestagon</Text>
            </div>

            <button
              className="text-sm font-semibold text-blue-500 transition hover:underline"
              onClick={() => setIsReplying(!isReplying)}
            >
              Reply
            </button>
          </div>
          <Text className="text-blue-200">
            Also, please allow styles to be applied based on system preferences.
            I would love to be able to browse Frontend Mentor in the evening
            after my device’s dark mode turns on without the bright background
            it currently has.
          </Text>

          <Show when={isReplying}>
            <motion.div
              className="flex w-full items-start gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
            >
              <Textarea className="h-20" name="reply" />
              <Button className="w-fit">Post Reply</Button>
            </motion.div>
          </Show>
        </div>
      </div>
    </>
  );
}

const Divider = ({ className }: { className?: string }) => (
  <div className={`h-px w-full bg-gray-200 ${className}`} />
);
