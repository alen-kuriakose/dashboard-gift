"use client";
import { GiftsPageLayout } from "@/layouts";
import { RecoilRoot } from "recoil";

export default function EventsPage() {
  return (
    <RecoilRoot>
      <div className="bg-white dark:bg-black font-inter">
        <GiftsPageLayout />
      </div>
    </RecoilRoot>
  );
}
