/* eslint-disable */
"use client";
import { cn } from "@/lib/utils";
import { Copy } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";
import { StatusIndicator } from "./ui/statusindicator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

import sort from "@/assets/icons/ArrowsDownUp.svg";
import filter from "@/assets/icons/FunnelSimple.svg";

import calendar from "@/assets/icons/CalendarBlank.svg";
import Image from "next/image";
import { Search } from "./search";
import { format } from "date-fns";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { eventUrl } from "@/utils/constants";
import { PopoverClose } from "@radix-ui/react-popover";

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
  const [sorted,setSorted]=useState(false)
  const [orderListData,setOrderListData]=useState<Array<any>>([])
  useEffect(() => {
    setOrderListData(data);
  }, [data]);
  useEffect(()=>{
    // setOrderListData(orderListData)
    console.log("data modified")
    console.log(data)
    sorted&&setSorted(false)
  },[sorted])
  
  const [currentPage, setCurrentPage] = useState(1);
  // Calculate total pages based on the data length
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Function to get the current page data
  const getCurrentPageData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return orderListData.slice(startIndex, endIndex);
  };

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  function sortEvents(events: any, key: any) {
    data = events.sort((a: any, b: any) => {
      const valueA = a[key].toString().toLowerCase();
      const valueB = b[key].toString().toLowerCase();

      if (valueA < valueB) {
        return -1;
      } else if (valueA > valueB) {
        return 1;
      } else {
        return 0;
      }
    });
    setSorted(true)
    setOrderListData(data)
  }

  function searchEvents(events: any, searchString: any) {
    console.log(searchString)
    let searchResult=events.filter((event: any) => {
      return Object.values(event).some((value: any) =>
        value.toString().toLowerCase().includes(searchString.toLowerCase())
      );
    });
    setOrderListData(searchResult)
    setCurrentPage(1);
    setSorted(true)
  }
  function popEventById(events: any, id: any) {
    const index = events.findIndex((event: any) => event.id === id);
    if (index !== -1) {
      return events.splice(index, 1)[0]; // Removes the event and returns it
    }
    return null; // Return null if no event found with the given id
  }

  return (
    <Card className="w-[100vw] md:w-auto flex  rounded-2xl  shadow-none h-full border-0 gap-3 flex-col">
      <CardHeader className="p-0 bg-[#F7F9FB] dark:bg-[#FFFFFF0D]/5 rounded-lg ">
        <div className="flex justify-between w-full p-2">
          <div className="flex gap-2  w-auto">
            {/* <div className="p-1">
              <Image src={filter} alt="filter" className="dark:invert" />
            </div> */}
            <Popover>
              <PopoverTrigger>
                <div className="p-1">
                  <Image src={sort} alt="sort" className="dark:invert" />
                </div>
              </PopoverTrigger>
              <PopoverContent className="space-y-2 w-[160px]">
                <PopoverClose className="w-full">
                  <div
                    className="w-100 p-2 border text-sm text-center rounded-md"
                    onClick={() => sortEvents(data, "title")}
                  >
                    Event
                  </div>
                </PopoverClose>
                {/* <PopoverClose className="w-full">
                  <div className="w-100 p-2 border text-sm text-center rounded-md" onClick={()=>(sortEvents(data,"event"))}>
                    Description
                  </div>
                </PopoverClose> */}
                <PopoverClose className="w-full">
                  <div
                    className="w-100 p-2 border text-sm text-center rounded-md"
                    onClick={() => sortEvents(data, "location")}
                  >
                    Location
                  </div>
                </PopoverClose>
                
              </PopoverContent>
            </Popover>
          </div>
          <div>
            <Search keyboardActionReq={false} onChangeFn={(event:any)=>(searchEvents(data,event.target.value))}/>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0  overflow-x-scroll md:overflow-auto">
        <Table className="pb-0">
          <TableHeader>
            <TableRow>
              <TableHead className="px-3 py-[11px]">Serial No</TableHead>
              <TableHead className="px-3 py-[11px]">Event</TableHead>
              <TableHead className="px-3 py-[11px]">Description</TableHead>
              <TableHead className="px-3 py-[11px]">Event Date</TableHead>
              <TableHead className="px-3 py-[11px]">Location</TableHead>
              <TableHead className="px-3 py-[11px]">Organizer</TableHead>
              <TableHead></TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="border-b">
            {getCurrentPageData().map((order: any, index: any) => {
              return (
                <React.Fragment key={index}>
                  <TableRow className={``} onClick={() => handleClick(index)}>
                    {/* <TableCell>
                      <Checkbox />
                    </TableCell> */}
                    <TableCell>
                      <div className="">
                        {index + 1 + (currentPage - 1) * itemsPerPage}
                      </div>
                    </TableCell>
                    <TableCell className="flex gap-2 items-center">
                      {order.title}
                    </TableCell>
                    <TableCell className="w-[250px]">
                      {order.description}
                    </TableCell>
                    <TableCell className="flex gap-2 items-center">
                      {/* <div className="">
                        <Image
                          src={calendar}
                          alt="filter"
                          className="dark:invert"
                        />
                      </div> */}
                      {format(new Date(order.date), "PP")}
                    </TableCell>
                    <TableCell className="">
                      <div className="flex">{order.location}</div>
                    </TableCell>
                    <TableCell className="">
                      {/* <StatusIndicator
                        className="text-xs"
                        variant={
                          order.status.toLowerCase().replace(" ", "-") as any
                        }
                      > */}
                      {order.organizer}
                      {/* </StatusIndicator> */}
                    </TableCell>
                    {/* </TableCell>
                    
                      // className={cn(
                      //   activeRow == index ? "opacity-100" : "opacity-0"
                      // )}
                      className=""
                    > */}
                    <Dialog>
                      <TableCell>
                        <DialogTrigger
                          asChild
                          className={cn(
                            "",
                           "opacity-100" 
                          )}
                        >
                          <span className="material-symbols-rounded text-lg p-2 rounded-sm hover:bg-dark/10  hover:dark:bg-white/10 cursor-pointer">
                            share
                          </span>
                        </DialogTrigger>
                      </TableCell>

                      <DialogContent className="sm:max-w-md bg-white dark:bg-dark">
                        <DialogHeader>
                          <DialogTitle className="text-black dark:text-white">Share link</DialogTitle>
                          <DialogDescription>
                            Anyone who has this link will be able to join this
                            event.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="flex items-center space-x-2">
                          <div className="grid flex-1 gap-2">
                            <Label htmlFor="link" className="sr-only">
                              Link
                            </Label>
                            <Input
                              id="link"
                              defaultValue={eventUrl + order.id}
                              readOnly
                              className="dark:text-white text-dark"
                            />
                          </div>
                          <Button
                            type="submit"
                            size="sm"
                            className="px-3"
                            onClick={() =>
                              navigator.clipboard.writeText(eventUrl + order.id)
                            }
                          >
                            <span className="sr-only">Copy</span>
                            <span className="material-symbols-rounded text-lg text-white dark:text-dark">
                              content_copy
                            </span>
                          </Button>
                        </div>
                        <DialogFooter className="sm:justify-start w-100">
                          <DialogClose
                            asChild
                            className="w-100 flex justify-center"
                          >
                            <Button type="button" variant="default">
                              Close
                            </Button>
                          </DialogClose>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                    <Popover>
                      <PopoverTrigger asChild>
                        <TableCell
                          className={cn(
                           "opacity-100" 
                          )}
                        >
                          <div className="">
                            <span className="material-symbols-rounded text-lg p-2 rounded-sm hover:bg-dark/10  hover:dark:bg-white/10 cursor-pointer">
                              delete
                            </span>
                          </div>
                        </TableCell>
                      </PopoverTrigger>
                      <PopoverContent className=" w-[200px] ">
                        <PopoverClose className="w-full flex gap-2 justify-center">
                          <Button type="button" variant="outline">
                            Cancel
                          </Button>
                          <Button
                            type="button"
                            variant="default"
                            onClick={() => popEventById(data, order.id)}
                          >
                            Confirm
                          </Button>
                        </PopoverClose>
                      </PopoverContent>
                    </Popover>
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
