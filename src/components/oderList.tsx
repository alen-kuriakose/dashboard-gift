/* eslint-disable */
"use client";
import { orderHistory } from "@/utils/helper";
import {} from "lucide-react";
import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { StatusIndicator } from "./ui/statusindicator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { cn } from "@/lib/utils";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
} from "./ui/pagination";

import add from "@/assets/icons/Add.svg";
import filter from "@/assets/icons/FunnelSimple.svg";
import sort from "@/assets/icons/ArrowsDownUp.svg";
import clipboard from "@/assets/icons/ClipboardText.svg";

import calendar from "@/assets/icons/CalendarBlank.svg";
import Image from "next/image";
import { Search } from "./search";
import { TextSmallSemibold } from "./typography";
type orderListProps = {
  data: Array<any>;
  itemsPerPage: number;
};
export const OderList = ({ data, itemsPerPage }: orderListProps) => {
  const [hover, setHoverState] = useState(false);
  const [activeRow, setActiveRow] = useState<number>();
  const handleClick = (index: number) => {
    setActiveRow(index);
    setHoverState(!hover);
  };
  const [currentPage, setCurrentPage] = useState(1);
  // Calculate total pages based on the data length
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Function to get the current page data
  const getCurrentPageData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <Card className="w-[100vw] md:w-auto flex p-7  rounded-2xl  shadow-none h-full border-0 gap-3 flex-col">
      <div className="px-2 py-1 mb-5 ">
        <TextSmallSemibold className="text-dark dark:text-white">
          Order List
        </TextSmallSemibold>
      </div>
      <CardHeader className="p-0 bg-[#F7F9FB] dark:bg-[#FFFFFF0D]/5 rounded-lg ">
        <div className="flex justify-between w-full p-2">
          <div className="flex gap-2  w-auto">
            <div className="p-1">
              <Image src={add} alt="add" className="dark:invert" />
            </div>
            <div className="p-1">
              <Image src={filter} alt="filter" className="dark:invert" />
            </div>
            <div className="p-1">
              <Image src={sort} alt="sort" className="dark:invert" />
            </div>
          </div>
          <div>
            <Search keyboardActionReq={false} />
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0  overflow-x-scroll md:overflow-auto">
        <Table className="pb-0">
          <TableHeader>
            <TableRow>
              <TableHead>
                <Checkbox />
              </TableHead>
              <TableHead className="px-3 py-[11px]">Order ID</TableHead>
              <TableHead className="px-3 py-[11px]">User</TableHead>
              <TableHead className="px-3 py-[11px]">Project</TableHead>
              <TableHead className="px-3 py-[11px]">Address</TableHead>
              <TableHead className="px-3 py-[11px]">Date</TableHead>
              <TableHead className="px-3 py-[11px]">Status</TableHead>
              <TableHead className="px-3 py-[11px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="border-b">
            {getCurrentPageData().map((order: any, index: any) => {
              return (
                <React.Fragment key={index}>
                  <TableRow className={``} onClick={() => handleClick(index)}>
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                    <TableCell>
                      <div className="">{order.orderId}</div>
                    </TableCell>
                    <TableCell className="flex gap-2 items-center">
                      <div className="">
                        <Image src={order.icon} alt="filter" className="" />
                      </div>
                      {order.user}
                    </TableCell>
                    <TableCell className="">{order.project}</TableCell>
                    <TableCell className="flex gap-2 items-center">
                      <div className="">
                        <Image
                          src={calendar}
                          alt="filter"
                          className="dark:invert"
                        />
                      </div>
                      {order.date}
                    </TableCell>
                    <TableCell className="">
                      <div className="flex">
                        {order.address}
                        {activeRow == index ? (
                          <Image
                            src={calendar}
                            alt="filter"
                            className="dark:invert"
                          />
                        ) : (
                          ""
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="">
                      <StatusIndicator
                        className="text-xs"
                        variant={
                          order.status.toLowerCase().replace(" ", "-") as any
                        }
                      >
                        {order.status}
                      </StatusIndicator>
                    </TableCell>
                    <TableCell
                      className={cn(
                        activeRow == index ? "opacity-100" : "opacity-0"
                      )}
                    >
                      ...
                    </TableCell>
                  </TableRow>
                </React.Fragment>
              );
            })}
          </TableBody>
        </Table>
        <div className="pt-3 w-full">
          <Pagination className=" mt-4 justify-end">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                />
              </PaginationItem>

              {/* Pages */}
              {Array.from({ length: totalPages }).map((_, index) => (
                <PaginationItem key={index}>
                  <PaginationLink
                    isActive={currentPage === index + 1}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </CardContent>
    </Card>
  );
};
