"use client";
import { Navbar, NotificationPanel, OderList } from "@/components";
import { DashboardSection } from "@/components/sections";
import { Header4xlSemibold, TextLgRegular } from "@/components/typography";
import {
  ActiveIndexServicesCard,
  EnableNotificationPanel,
} from "@/states/GlobalState";
import { usePathname } from "next/navigation";
import { useRecoilValue } from "recoil";
import { SideBarLayout } from "./SideBarLayout";
import { orderHistory } from "@/utils/helper";
import { useEffect, useState } from "react";

export function DashboardPageLayout() {
  const isNotificationPanelActive = useRecoilValue(EnableNotificationPanel);
  const pathname = usePathname();
  const activeCardIndex = useRecoilValue(ActiveIndexServicesCard);
  const [breadcrumbs,setBreadcrumbs]=useState<any>()
  /**
   * The function `generateBreadcrumbs` creates breadcrumb navigation based on the current pathname in
   * a TypeScript React application.
   * @returns An array of breadcrumb objects is being returned. Each breadcrumb object contains a
   * `href` property with the path segment up to that point and a `label` property with the
   * corresponding segment label. Additionally, a breadcrumb object is inserted at index 1 with the
   * `href` set to `/` and the `label` set to `activeCardIndex`.
   */
  const generateBreadcrumbs = () => {
    const pathSegments = pathname.split('/').filter(segment => segment !== '');
    console.log(pathSegments)
    return pathSegments;
  };

  useEffect(()=>{
    const breadcrumbsArray = generateBreadcrumbs();
    setBreadcrumbs(breadcrumbsArray)
  },[])
  return (
    // <div className=" grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[212px_1fr] overflow-hidden">
    // <SideBarLayout breadcrumbsArray={breadcrumbs} />
    // <div className="w-full flex">
    <div className="flex w-full">
      <div className="w-full">
        <Navbar
          className="hidden md:flex flex-grow h-fit"
          breadcrumbs={breadcrumbs}
        />
        <DashboardSection />;
      </div>
      {isNotificationPanelActive && <NotificationPanel />}
    </div>
    // </div>
  );
}
