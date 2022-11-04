import { cva } from "class-variance-authority";
import Link from "next/link";
import React from "react";

import { FilterTag } from "@/components/common/FilterTag";
import { Heading } from "@/components/common/Heading";
import { Text } from "@/components/common/Text";

export function SideBar() {
  return (
    <div className="scrollbar-y sticky top-8 flex w-full max-w-[255px] flex-col items-start gap-6">
      <Header />
      <Filters />
      <Roadmap />
    </div>
  );
}

function Header() {
  return (
    <div className="radial-gradient relative flex h-[137px] w-full flex-col items-start justify-end overflow-hidden rounded-[10px] p-6 ">
      <div>
        <Heading as="h2" className="text-white">
          Frontend Mentor
        </Heading>
        <Text className="text-white">Feedback Board</Text>
      </div>
      <span
        className="absolute top-[40px] left-[150px]	h-[192px] w-[192px] rounded-full bg-orange blur-2xl"
        aria-hidden
      />
    </div>
  );
}

function Filters() {
  const [selectedFilter, setSelectedFilter] = React.useState<string[]>([]);

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

  return (
    <div className="flex  w-full flex-wrap  rounded-[10px] bg-white p-6 shadow-sm">
      {[...FILTERS].map((filter) => (
        <FilterTag
          key={filter.value}
          className="mb-3.5 ml-2 last:mb-0"
          onClick={() => handleFilterClick(filter.value)}
          active={active(filter.value)}
        >
          {filter.label}
        </FilterTag>
      ))}
    </div>
  );
}

function Roadmap() {
  return (
    <div className="flex w-full flex-col items-center gap-6 rounded-[10px] bg-white p-6 shadow-sm">
      <div className="flex w-full items-center justify-between">
        <Heading as="h3">Roadmap</Heading>
        <Link
          href="/roadmap"
          className="text-sm text-blue-500 underline
transition hover:text-[#8397F8]"
        >
          View
        </Link>
      </div>
      <div className="flex w-full flex-col gap-2 ">
        {STATUS.map((status) => (
          <div
            className="flex w-full justify-between gap-2 "
            key={status.label}
          >
            <Text className="flex items-center gap-4" as="div">
              <div
                className={statusDot({
                  status: status.label.toLowerCase() as Status,
                })}
              />
              {status.label}
            </Text>
            <Text as="span" className="!font-bold">
              {status.value}
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
}

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

type Status = "planned" | "in-progress" | "live";

const statusDot = cva(["w-2", "h-2", "rounded-full", "shrink-0"], {
  variants: {
    status: {
      planned: ["bg-orange"],
      "in-progress": ["bg-pink"],
      live: ["bg-blue-600"],
    },
  },
});
