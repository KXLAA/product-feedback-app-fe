import { cva } from "class-variance-authority";
import Link from "next/link";

import { Text } from "@/components/common/Text";
import { CommentIcon } from "@/components/icons/CommentIcon";

interface CommentButtonProps {
  comments?: number;
  href: string;
}

export function CommentButton({ href, comments }: CommentButtonProps) {
  return (
    <Link href={href} className={comment({ empty: !comments })}>
      <CommentIcon />
      <Text size="lg" className="font-bold text-blue-400">
        {comments || 0}
      </Text>
    </Link>
  );
}

const comment = cva(["flex items-center gap-2"], {
  variants: {
    empty: {
      true: ["opacity-50"],
    },
  },
});
