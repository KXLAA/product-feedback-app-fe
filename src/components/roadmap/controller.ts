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
import type { FeedbackStatus } from "@/types";

type Items = Record<FeedbackStatus, typeof mockFeedback>;

export function useRoadmapController() {
  const feedbackGroupedByStatus = React.useMemo(() => {
    return mockFeedback.reduce((acc, item) => {
      if (!acc[item.status]) {
        acc[item.status] = [];
      }
      acc[item.status]?.push(item);
      return acc;
    }, {} as Items);
  }, []);

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

  function findContainer(id: UniqueIdentifier | undefined) {
    if (id && id in items) {
      return id;
    }
    return Object.keys(items).find((key) => {
      return items[key as FeedbackStatus].some((item) => item.id === id);
    });
  }

  function handleDragStart(event: DragStartEvent) {
    const activeId = event.active.id;
    setActiveId(activeId);
  }

  function handleDragOver(event: DragOverEvent) {
    const { active, over } = event;
    const activeId = active.id;
    const overId = over?.id;
    const activeContainer = findContainer(activeId);
    const overContainer = findContainer(overId);
    console.log(overContainer);

    if (
      !activeContainer ||
      !overContainer ||
      activeContainer === overContainer
    ) {
      return;
    }

    setItems((items) => {
      const activeItems = items[activeContainer as FeedbackStatus];
      const overItems = items[overContainer as FeedbackStatus];

      // Find the indexes for the items
      const activeIndex = activeItems?.findIndex(
        (item) => item.id === activeId
      );
      const overIndex = overItems?.findIndex((item) => item.id === overId);
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
        [activeContainer]: items[activeContainer as FeedbackStatus].filter(
          (item) => item.id !== active.id
        ),
        [overContainer]: mapNewStatus(
          [
            ...items[overContainer as FeedbackStatus].slice(0, newIndex),
            items[activeContainer as FeedbackStatus][activeIndex],
            ...items[overContainer as FeedbackStatus].slice(
              newIndex,
              items[overContainer as FeedbackStatus].length
            ),
          ],
          overContainer as FeedbackStatus
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

    if (
      !activeContainer ||
      !overContainer ||
      activeContainer !== overContainer
    ) {
      return;
    }

    const activeIndex = items[activeContainer as FeedbackStatus]?.findIndex(
      (item) => item.id === activeId
    );
    const overIndex = items[overContainer as FeedbackStatus].findIndex(
      (item) => item.id === overId
    );

    if (activeIndex !== overIndex) {
      setItems((items) => ({
        ...items,
        [overContainer]: mapNewStatus(
          arrayMove(
            items[overContainer as FeedbackStatus],
            activeIndex,
            overIndex
          ),
          overContainer as FeedbackStatus
        ),
      }));
    }
    setActiveId(null);
  }

  function mapNewStatus<T>(item: T[], status: FeedbackStatus) {
    return item.map((item) => ({
      ...item,
      status,
    }));
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
