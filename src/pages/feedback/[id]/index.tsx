import Link from "next/link";
import { useRouter } from "next/router";

import { Button } from "@/components/common/Button";
import { GoBack } from "@/components/common/GoBack";

export default function Feedback() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <div className="flex w-full justify-between">
        <GoBack href="/" />
        <Link href={`/feedback/${id}/edit`}>
          <Button intent="secondary">Edit Feedback</Button>
        </Link>
      </div>
    </>
  );
}
