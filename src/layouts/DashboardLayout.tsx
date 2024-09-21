import React from "react";
import { SideBarLayout } from "./SideBarLayout";
import { ThemeToggler } from "@/components";

export function DashboardLayout() {
  return (
    <div className=" grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[212px_1fr] overflow-hidden">
      <SideBarLayout />
      <div>
        DashboardLayout
        <div>
          <ThemeToggler />
        </div>
      </div>
    </div>
  );
}
