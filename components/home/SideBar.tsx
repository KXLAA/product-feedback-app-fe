import { cva } from "class-variance-authority";
import Image from "next/image";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { FadeInOut } from "@/components/animation/FadeInOut";
import { FilterTag } from "@/components/common/FilterTag";
import { Heading } from "@/components/common/Heading";
import { Show } from "@/components/common/Show";
import { Text } from "@/components/common/Text";
import type { Status } from "@/components/home/controller";
import { useHomeController } from "@/components/home/controller";

export function SideBar() {
  const { filters, status, handleFilterClick, active } = useHomeController();
  const { data: sessionData } = useSession();

  console.log(sessionData);

  return (
    <FadeInOut className="scrollbar-y sticky flex w-full max-w-[255px] flex-col items-start gap-6 md:top-8">
      <div className="radial-gradient relative flex h-[137px] w-full flex-col items-start justify-end overflow-hidden rounded-[10px] p-6 ">
        <div>
          <button
            className="bg-violet-50 hover:bg-violet-100 rounded-md border border-black px-4 py-2 text-xl shadow-lg"
            onClick={sessionData ? () => signOut() : () => signIn()}
          >
            {sessionData ? "Sign out" : "Sign in"}
          </button>

          <Show when={!!sessionData}>
            <img src={sessionData?.user?.image || ""} />
            <p className="text-2xl text-blue-500">
              Logged in as {sessionData?.user?.name}
            </p>
          </Show>

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

      <div className="flex  w-full flex-wrap  rounded-[10px] bg-white p-6 shadow-sm">
        {[...filters].map((filter) => (
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
          {[...status].map((status) => (
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
    </FadeInOut>
  );
}

const statusDot = cva(["w-2", "h-2", "rounded-full", "shrink-0"], {
  variants: {
    status: {
      planned: ["bg-orange"],
      "in-progress": ["bg-pink"],
      live: ["bg-blue-600"],
    },
  },
});
