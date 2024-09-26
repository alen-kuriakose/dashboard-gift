"use client";
import { Navbar, NotificationPanel } from "@/components";
import { DashboardSection, GiftsSection } from "@/components/sections";
import { TextSmallSemibold } from "@/components/typography";
import {
  ActiveIndexServicesCard,
  EnableNotificationPanel,
} from "@/states/GlobalState";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

export const GiftsPageLayout = () => {
  const isNotificationPanelActive = useRecoilValue(EnableNotificationPanel);
  const pathname = usePathname();
  const activeCardIndex = useRecoilValue(ActiveIndexServicesCard);
  const [breadcrumbs, setBreadcrumbs] = useState<any>();
  /**
   * The function `generateBreadcrumbs` creates breadcrumb navigation based on the current pathname in
   * a TypeScript React application.
   * @returns An array of breadcrumb objects is being returned. Each breadcrumb object contains a
   * `href` property with the path segment up to that point and a `label` property with the
   * corresponding segment label. Additionally, a breadcrumb object is inserted at index 1 with the
   * `href` set to `/` and the `label` set to `activeCardIndex`.
   */
  const generateBreadcrumbs = () => {
    const pathSegments = pathname
      .split("/")
      .filter((segment) => segment !== "");
    console.log(pathSegments);
    return pathSegments;
  };

  useEffect(() => {
    const breadcrumbsArray = generateBreadcrumbs();
    setBreadcrumbs(breadcrumbsArray);
  }, []);

  return (
    <div className="flex w-full">
      <div className="w-full">
        <Navbar
          className="hidden md:flex flex-grow h-fit"
          breadcrumbs={breadcrumbs}
        />
        <div className="p-7">
          <div className="px-2 py-1 mb-5 flex justify-between items-center">
            <TextSmallSemibold className="text-dark dark:text-white">
              Gifts
            </TextSmallSemibold>
          </div>
          <GiftsSection />;

        </div>
      </div>
      {isNotificationPanelActive && <NotificationPanel />}
    </div>
  );
};
