"use client";
import { DashboardPageLayout } from "@/layouts";
import React from "react";
import { RecoilRoot } from "recoil";

export default function DashboardPage() {
  return (
    <RecoilRoot>
      <div className="bg-white dark:bg-black font-inter">
        <DashboardPageLayout />
      </div>
    </RecoilRoot>
  );
}
