import Link from "next/link";

import { Button } from "@/components/common/Button";
import { GoBack } from "@/components/common/GoBack";
import { Header } from "@/components/common/Header";
import { Text } from "@/components/common/Text";
import { PageLayout } from "@/components/layout/PageLayout";
import { RoadmapGrid } from "@/components/roadmap/RoadmapGrid";

export default function Roadmap() {
  return (
    <PageLayout>
      <Header className="sticky top-8 flex h-[113px] items-center justify-between px-6">
        <div className="flex flex-col items-end gap-1">
          <GoBack href="/" variant="fill" className="h-5 self-start !p-0" />
          <Text size="xl" className="font-bold text-white" as="div">
            Roadmap
          </Text>
        </div>
        <Link href="/feedback/create">
          <Button>+ Add Feedback</Button>
        </Link>
      </Header>
      <RoadmapGrid />
    </PageLayout>
  );
}
