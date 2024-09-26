"use client";
import { SideBarLayout } from "@/layouts";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { RecoilRoot } from "recoil";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const generateBreadcrumbs = () => {
    const pathSegments = pathname
      .split("/")
      .filter((segment) => segment !== "");
    return pathSegments;
  };

    const breadcrumbsArray = generateBreadcrumbs();
  return (
    <RecoilRoot>
      <div className="bg-white dark:bg-black font-inter">
        <div className=" grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[212px_1fr] overflow-hidden">
          <SideBarLayout breadcrumbsArray={breadcrumbsArray} />
          <div className="w-full flex">{children}</div>
        </div>
      </div>
    </RecoilRoot>
  );
}
