"use client";
import { DashboardLayout } from "@/layouts";
import React from "react";
import { RecoilRoot } from "recoil";

export default function dashboardPage() {
  return (
    <RecoilRoot>
      <div className="bg-white dark:bg-black font-inter">
        <DashboardLayout />
      </div>
    </RecoilRoot>
  );
}
