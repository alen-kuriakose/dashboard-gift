"use client";
import { SideBarLayout } from "@/layouts";
import {
  EnableNotificationPanel,
  ActiveIndexServicesCard,
} from "@/states/GlobalState";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";
import { RecoilRoot, useRecoilValue } from "recoil";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const generateBreadcrumbs = () => {
    const pathSegments = pathname.split("/").filter((segment) => segment);
    const url = pathSegments[0];
    const breadcrumbs = pathSegments.map((segment, index) => {
      const href = "/" + pathSegments.slice(0, index + 1).join("/");
      return { href, label: segment };
    });
    // breadcrumbs.splice(1, 0, {
    //   href: `/${url}`,
    //   label: activeCardIndex,
    // });
    console.log(breadcrumbs)
    return [...breadcrumbs];
  };
  const breadcrumbs = generateBreadcrumbs();
  return (
    <RecoilRoot>
      <div className="bg-white dark:bg-black font-inter">
        <div className=" grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[212px_1fr] overflow-hidden">
          <SideBarLayout breadcrumbsArray={breadcrumbs} />
          <div className="w-full flex">{children}</div>
        </div>
      </div>
    </RecoilRoot>
  );
}
