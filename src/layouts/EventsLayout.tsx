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

export function EventsLayout() {
  const isNotificationPanelActive = useRecoilValue(EnableNotificationPanel);
  const pathname = usePathname();
  const activeCardIndex = useRecoilValue(ActiveIndexServicesCard);

  /**
   * The function `generateBreadcrumbs` creates breadcrumb navigation based on the current pathname in
   * a TypeScript React application.
   * @returns An array of breadcrumb objects is being returned. Each breadcrumb object contains a
   * `href` property with the path segment up to that point and a `label` property with the
   * corresponding segment label. Additionally, a breadcrumb object is inserted at index 1 with the
   * `href` set to `/` and the `label` set to `activeCardIndex`.
   */
  const generateBreadcrumbs = () => {
    const pathSegments = pathname.split("/").filter((segment) => segment);
    const url = pathSegments[0];
    const breadcrumbs = pathSegments.map((segment, index) => {
      const href = "/" + pathSegments.slice(0, index + 1).join("/");
      return { href, label: segment };
    });
    breadcrumbs.splice(1, 0, {
      href: `/${url}`,
      label: activeCardIndex,
    });
    return [...breadcrumbs];
  };
  const breadcrumbs = generateBreadcrumbs();
  return (
    <div className="flex w-full">
      <div className="w-full">
        <Navbar
          className="hidden md:flex flex-grow h-fit"
          breadcrumbs={breadcrumbs}
        />
        <div className="w-full">
          <OderList data={orderHistory} itemsPerPage={10} />
        </div>
      </div>
      {isNotificationPanelActive && <NotificationPanel />}
    </div>
  );
}
