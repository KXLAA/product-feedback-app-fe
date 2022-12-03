import { Button } from "@/components/common/Button";
import { Text } from "@/components/common/Text";
import { Textarea } from "@/components/form/TextAreaField";

export function AddComment() {
  return (
    <div className="flex w-full flex-col gap-6 rounded bg-white px-8 py-6 shadow-sm">
      <Text size="xl" className="font-bold text-blue-400">
        Add Comment
      </Text>
      <Textarea className="h-20" name="reply" maxLength={230} />
      <div className="flex w-full justify-between">
        <Text className=" text-blue-200">225 characters left</Text>
        <Button className="self-end">Post Comment</Button>
      </div>
    </div>
  );
}
