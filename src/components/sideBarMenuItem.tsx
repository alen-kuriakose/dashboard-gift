"use client";
import arrowRight from "@/assets/icons/ArrowLineRight.svg";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import UsersThree from "@/assets/icons/UsersThree.svg";

import { TextSmallRegular } from "./typography";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
interface SidebarMenuItemProps {
  title: string;
  description: string;
  icon: string;
  index: number;
  isActive: boolean;
  onClick: () => void;
  contents?: Array<any>;
  clicked?: boolean;
  url: string;
}

export const SidebarMenuItem = ({
  title,
  icon,
  index,
  isActive,
  onClick,
  clicked,
  contents,
  url,
}: SidebarMenuItemProps) => {
  const [containsTree, setContainsTree] = useState(false);
  useEffect(() => {
    if (contents && contents.length > 0) {
      setContainsTree(true);
    }
  }, []);

  return (
    <div>
      <AccordionItem value={title}>
        <AccordionTrigger className="p-0 pb-2 hover:no-underline">
          <div
            className={cn(
              "flex flex-col py-1 relative group/feature  col-span-3 cursor:pointer w-full "
            )}
            onClick={onClick}
            role="button"
          >
            <div
              className={cn(
                "opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-primary/5 dark:bg-white/10 pointer-events-none rounded-[8px]",
                isActive && "opacity-100"
              )}
            />
            <div className="text-lg font-bold relative z-10 px-2 flex gap-1 align-middle">
              <div
                className={cn(
                  "absolute left-0 top-1/2 -translate-y-1/2 opacity-0  group-hover/feature:opacity-100 group-hover/feature:h-4 w-1 rounded-full rounded-br-full  group-hover/feature:bg-primary transition-all duration-400 origin-center ",
                  isActive
                    ? "bg-primary  h-4 opacity-100 transition-all duration-400"
                    : "opacity-0 h-4 transition-all duration-400"
                )}
              />
              {/* {icon && ( */}
              <div className="flex align-middle w-4 h-4 my-auto">
                <Image
                  src={arrowRight}
                  alt={"arrow_right"}
                  className={cn(
                    "m-auto",
                    clicked && isActive
                      ? "rotate-90  transition-all duration-300"
                      : "rotate-0 transition-all duration-300",
                    containsTree ? "opacity-100" : "opacity-0"
                  )}
                />
              </div>
              <div className="flex align-middle w-4 h-4 my-auto">
                <Image
                  src={icon}
                  alt={"arrow_right"}
                  className={cn(
                    "m-auto dark:invert ",
                  )}
                />

              </div>
              <TextSmallRegular className="inline-block font-inter text-primary dark:text-white">
                {title}
              </TextSmallRegular>
              {/* <span
            className={cn(
              " inline-block font-inter font-normal text-sm text-primary dark:text-white"
            )}
          >
            {title}
          </span> */}
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-1 transition-all duration-300">
            {contents?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="font-bold relative z-10 ps-[3rem] flex gap-1 transition-all duration-300 py-1"
                >
                  <TextSmallRegular className="inline-block font-inter text-primary dark:text-white transition-all duration-300">
                    {item.title}
                  </TextSmallRegular>
                </div>
              );
            })}
          </div>
        </AccordionContent>
      </AccordionItem>
    </div>
  );
};
