import type {
  DragEndEvent,
  DragOverEvent,
  DragStartEvent,
  UniqueIdentifier,
} from "@dnd-kit/core";
import {
  KeyboardSensor,
  MouseSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import React from "react";

import { mockFeedback } from "@/components/mocks";
import type { FeedbackStatus, FeedbackType } from "@/types";

type Items = Record<FeedbackStatus, typeof mockFeedback>;

export function useRoadMapController() {
  const feedbackGroupedByStatus = React.useMemo(
    () => groupFeedbackByStatus(mockFeedback),
    []
  );

  const [activeId, setActiveId] = React.useState<UniqueIdentifier | null>();
  const [items, setItems] = React.useState<Items>(feedbackGroupedByStatus);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function findContainer(id?: UniqueIdentifier) {
    if (!id) return undefined;
    if (typeof id === "number") return undefined;
    if (keyOf(items).includes(id as FeedbackStatus))
      return id as FeedbackStatus;

    return keyOf(items).find((key) => {
      return items[key].some((item) => item.id === id);
    });
  }

  function handleDragStart(event: DragStartEvent) {
    setActiveId(event.active.id);
  }

  function handleDragOver(event: DragOverEvent) {
    const { active, over } = event;
    const activeId = active.id;
    const overId = over?.id;
    const activeContainer = findContainer(activeId);
    const overContainer = findContainer(overId);
    const isInSameContainer = activeContainer === overContainer;
    const containersDoNotExist = !activeContainer || !overContainer;

    if (isInSameContainer || containersDoNotExist) {
      return;
    }

    setItems((items) => {
      const activeItems = items[activeContainer] || [];
      const overItems = items[overContainer] || [];

      // Find the indexes for the items
      const activeIndex = activeItems.findIndex((item) => item.id === activeId);
      const overIndex = overItems.findIndex((item) => item.id === overId);

      let newIndex: number;
      if (overId && overId in items) {
        newIndex = overItems.length + 1;
      } else {
        const isBelowOverItem =
          over &&
          active.rect.current.translated &&
          active.rect.current.translated.top > over.rect.top + over.rect.height;
        const modifier = isBelowOverItem ? 1 : 0;
        newIndex = overIndex >= 0 ? overIndex + modifier : overItems.length + 1;
      }
      return {
        ...items,
        // Remove the item from the original container
        [activeContainer]: items[activeContainer].filter(
          (item) => item.id !== activeId
        ),
        // Move the item to the new container & change the status
        [overContainer]: mapNewStatus(
          [
            ...items[overContainer].slice(0, newIndex),
            items[activeContainer][activeIndex],
            ...items[overContainer].slice(
              newIndex,
              items[overContainer].length
            ),
          ],
          overContainer
        ),
      };
    });
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    const activeId = active.id;
    const overId = over?.id;
    const activeContainer = findContainer(activeId);
    const overContainer = findContainer(overId);
    const isNotInSameContainer = activeContainer !== overContainer;
    const containersDoNotExist = !activeContainer || !overContainer;

    if (containersDoNotExist || isNotInSameContainer) {
      return;
    }

    const activeIndex = items[activeContainer]?.findIndex(
      (item) => item.id === activeId
    );
    const overIndex = items[overContainer].findIndex(
      (item) => item.id === overId
    );

    if (activeIndex !== overIndex) {
      setItems((items) => ({
        //Move item in the same container
        ...items,
        [overContainer]: mapNewStatus(
          arrayMove(items[overContainer], activeIndex, overIndex),
          overContainer
        ),
      }));
    }
    setActiveId(null);
  }

  function mapNewStatus(item: FeedbackType[], status: FeedbackStatus) {
    return item.map((item) => ({ ...item, status }));
  }

  return {
    sensors,
    handleDragStart,
    handleDragOver,
    handleDragEnd,
    items,
    activeId,
    setActiveId,
  };
}

export function keyOf<T extends object>(obj: T) {
  return Object.keys(obj) as (keyof T)[];
}

export function groupBy<T extends object, K extends keyof T>(
  list: T[],
  getKey: (item: T) => K
) {
  return list.reduce((acc, item) => {
    const key = getKey(item);
    console.log(key);

    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, {} as Record<K, T[]>);
}

function groupFeedbackByStatus(feedback: FeedbackType[]) {
  return feedback.reduce((acc, item) => {
    if (!acc[item.status]) {
      acc[item.status] = [];
    }
    acc[item.status].push(item);
    return acc;
  }, {} as Items);
}
