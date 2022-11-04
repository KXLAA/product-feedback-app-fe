import Link from "next/link";

import { Button } from "@/components/common/Button";
import { Text } from "@/components/common/Text";
import { EmptyIcon } from "@/components/icons/EmptyIcon";

export function EmptyFeedback() {
  return (
    <div className="flex h-[600px] w-full items-center justify-center rounded bg-white shadow-sm">
      <div className="flex w-full flex-col items-center gap-10">
        <EmptyIcon />
        <div className="flex flex-col gap-4">
          <Text
            size="3xl"
            className="text-center font-bold text-blue-400"
            as="span"
          >
            There is no feedback yet.
          </Text>
          <Text
            as="span"
            size="lg"
            className="w-full max-w-[410px] text-center text-blue-400"
          >
            Got a suggestion? Found a bug that needs to be squashed? We love
            hearing about new ideas to improve our app.
          </Text>
        </div>
        <Link href="/feedback/create">
          <Button>+ Add Feedback</Button>
        </Link>
      </div>
    </div>
  );
}
