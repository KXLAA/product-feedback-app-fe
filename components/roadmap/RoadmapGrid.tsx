import { closestCorners, DndContext } from "@dnd-kit/core";

import { Column } from "./Column";
import { keyOf, useRoadMapController } from "./controller";

export function RoadMapGrid() {
  const controller = useRoadMapController();

  return (
    <div className="flex w-full gap-8">
      <DndContext
        sensors={controller.sensors}
        collisionDetection={closestCorners}
        onDragStart={controller.handleDragStart}
        onDragOver={controller.handleDragOver}
        onDragEnd={controller.handleDragEnd}
      >
        {keyOf(controller.items).map((key) => (
          <Column
            key={key}
            id={key}
            heading={key}
            description={key}
            feedback={controller.items[key]}
          />
        ))}
      </DndContext>
    </div>
  );
}
