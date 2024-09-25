"use client";
import bell from "@/assets/icons/Bell.svg";
import clock from "@/assets/icons/ClockCounterClockwise.svg";
import sidebar from "@/assets/icons/Sidebar.svg";
import star from "@/assets/icons/Star.svg";
import sun from "@/assets/icons/Sun.svg";

import { cn } from "@/lib/utils";
import { EnableNotificationPanel } from "@/states/GlobalState";
import { Theme } from "@/utils/constants";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";
import { useRecoilState } from "recoil";
import { NotificationPanel } from "./notificationPanel";
import { Search } from "./search";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

type NavbaeProps = {
  className?: string;
  breadcrumbs: Array<any>;
};

export const Navbar = ({ className, breadcrumbs }: NavbaeProps) => {
  const [isNotificationActive, setNotificationActive] = useRecoilState(
    EnableNotificationPanel
  );
  const activateNotification = () => {
    setNotificationActive(!isNotificationActive);
  };
  const { theme, setTheme } = useTheme();
  const handleThemeChange = () => {
    if (theme == Theme.dark) {
      setTheme(Theme.light);
    } else {
      setTheme(Theme.dark);
    }
  };
  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
  return (
    <nav
      className={cn(
        "md:px-[1.75rem]  md:py-5 md:border-b flex md:justify-between justify-center items-center align-middle w-full ",
        className
      )}
    >
      <div className="flex gap-2">
        <div className="p-1 dark:invert hover:scale-105 transition-transform duration-200 ease-in-out hidden md:flex ">
          <Image src={star} alt="" width={20} height={20} />
        </div>
        <div className="p-1 dark:invert hover:scale-105 transition-transform duration-200 ease-in-out hidden md:block">
          <Image src={sidebar} alt="" width={20} height={20} />
        </div>
        <Breadcrumb className="px-2 hidden lg:block">
          <BreadcrumbList>
            {breadcrumbs &&
              breadcrumbs.map((crumb, index) => {
                const href = `/${breadcrumbs.slice(0, index + 1).join("/")}`;
                const isLast = index === breadcrumbs.length - 1;
                return (
                  <React.Fragment key={index}>
                    {index > 0 && <BreadcrumbSeparator />}
                    <BreadcrumbItem>
                      {isLast ? (
                        <BreadcrumbPage className="font-inter text-sm font-normal text-dark dark:text-white">
                          {capitalize(crumb)}
                        </BreadcrumbPage>
                      ) : (
                        <BreadcrumbLink
                          href={href}
                          className="font-inter text-sm font-normal text-dark/40 dark:text-white/40"
                        >
                          {capitalize(crumb)}
                        </BreadcrumbLink>
                      )}
                    </BreadcrumbItem>
                  </React.Fragment>
                );
              })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex gap-2 w-full h-full md:w-auto align-middle items-center">
        <Search keyboardActionReq={true} />

        <div
          className={cn(
            "p-1 dark:invert hover:scale-105 transition-transform duration-200 ease-in-out  "
          )}
          onClick={() => handleThemeChange()}
        >
          <Image src={sun} alt="" width={20} height={20} />
        </div>
        <div className="p-1 dark:invert  transition-transform duration-200 ease-in-out">
          <Image src={clock} alt="" width={20} height={20} />
        </div>
        <div
          className="p-1 dark:invert hover:scale-105 transition-transform duration-200 ease-in-out hidden xl:block"
          onClick={() => activateNotification()}
        >
          <Image src={bell} alt="" width={20} height={20} />
        </div>
        <Sheet>
          <SheetTrigger className="p-0 border-0">
            <div className=" dark:invert md:hover:scale-105 transition-transform duration-200 ease-in-out xl:hidden block">
              <Image src={bell} alt="" width={20} height={20} />
            </div>
          </SheetTrigger>
          <SheetContent className="border-0 bg-white dark:bg-dark p-0">
            <NotificationPanel />
          </SheetContent>
        </Sheet>
        <div className="p-1 dark:invert hover:scale-105 transition-transform duration-200 ease-in-out hidden md:block">
          <Image src={sidebar} alt="" width={20} height={20} />
        </div>
      </div>
    </nav>
  );
};
