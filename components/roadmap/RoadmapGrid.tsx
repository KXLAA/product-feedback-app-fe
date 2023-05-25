import { closestCorners, DndContext } from "@dnd-kit/core";

import type { FeedbackStatus } from "@/types";

import { Column } from "./Column";
import { useRoadmapController } from "./controller";

export function RoadmapGrid() {
  const { sensors, handleDragStart, handleDragOver, handleDragEnd, items } =
    useRoadmapController();

  return (
    <div className="flex w-full gap-8">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        {Object.keys(items).map((key) => (
          <Column
            key={key}
            id={key}
            heading={key}
            description={key}
            feedback={items[key as FeedbackStatus]}
          />
        ))}
      </DndContext>
    </div>
  );
}

//https://github.com/clauderic/dnd-kit/blob/master/stories/2%20-%20Presets/Sortable/MultipleContainers.tsx
