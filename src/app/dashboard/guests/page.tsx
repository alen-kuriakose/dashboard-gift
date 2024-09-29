"use client";
import { GuestPageLayout } from "@/layouts/GuestPageLayout";
import { RecoilRoot } from "recoil";

export default function EventsPage() {
  return (
    <RecoilRoot>
      <div className="bg-white dark:bg-black font-inter w-full">
        <GuestPageLayout />
      </div>
    </RecoilRoot>
  );
}
