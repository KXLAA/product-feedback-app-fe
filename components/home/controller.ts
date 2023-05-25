import React from "react";

export type Status = "planned" | "in-progress" | "live";

export function useHomeController() {
  const [selectedFilter, setSelectedFilter] = React.useState<string[]>([]);

  const FILTERS = [
    { label: "All", value: "all" },
    { label: "UI", value: "ui" },
    { label: "UX", value: "ux" },
    { label: "Enhancement", value: "enhancement" },
    { label: "Bug", value: "bug" },
    { label: "Feature", value: "feature" },
  ];

  const STATUS = [
    { label: "Planned", value: 2 },
    { label: "In-Progress", value: 3 },
    { label: "Live", value: 1 },
  ];

  const handleFilterClick = (filter: string) => {
    if (filter === "all") {
      setSelectedFilter([]);
    } else {
      if (selectedFilter.includes(filter)) {
        setSelectedFilter(selectedFilter.filter((f) => f !== filter));
      } else {
        setSelectedFilter([...selectedFilter, filter]);
      }
    }
  };

  const active = (filter: string) => {
    if (filter === "all") {
      return selectedFilter.length === 0;
    }
    return selectedFilter.includes(filter);
  };

  return {
    filters: FILTERS,
    status: STATUS,
    handleFilterClick,
    active,
    selectedFilter,
  };
}
