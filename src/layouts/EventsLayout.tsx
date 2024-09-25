"use client";
import { Navbar, NotificationPanel, OderList } from "@/components";
import { DashboardSection } from "@/components/sections";
import {
  Header4xlSemibold,
  TextLgRegular,
  TextSmallRegular,
  TextSmallSemibold,
} from "@/components/typography";
import {
  ActiveIndexServicesCard,
  EnableNotificationPanel,
} from "@/states/GlobalState";
import { usePathname } from "next/navigation";
import { useRecoilValue } from "recoil";
import { SideBarLayout } from "./SideBarLayout";
import { orderHistory } from "@/utils/helper";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Popover } from "@/components/ui/popover";
import { PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { DatePicker } from "@/components/ui/datepicker";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

export function EventsLayout() {
  const isNotificationPanelActive = useRecoilValue(EnableNotificationPanel);
  const pathname = usePathname();
  const activeCardIndex = useRecoilValue(ActiveIndexServicesCard);
  const [breadcrumbs, setBreadcrumbs] = useState<any>();
  const [eventData, setEventData] = useState<any>();
  const form = useForm({
    defaultValues: {
      title: "",
      description: "",
      date: new Date(),
      location: "",
      organizer: "",
    },
  });

  useEffect(() => {
    setEventData(orderHistory);
  }, []);

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
    return pathSegments;
  };
  useEffect(() => {
    const breadcrumbsArray = generateBreadcrumbs();
    setBreadcrumbs(breadcrumbsArray);
  }, []);

  const onSubmit = (data: any) => {
    console.log(data);
    data.id=Date.now().toString(16);

    // Here you would typically send this data to your backend
    eventData.unshift(data);
  };
  
  return (
    <div className="flex w-full">
      <div className="w-full">
        <Navbar
          className="hidden md:flex flex-grow h-fit"
          breadcrumbs={breadcrumbs}
        />
        <div className="w-full p-7">
          <div className="px-2 py-1 mb-5 flex justify-between items-center">
            <TextSmallSemibold className="text-dark dark:text-white">
              Events
            </TextSmallSemibold>

            <Dialog>
              <DialogTrigger asChild>
                <Button variant={"default"}>
                  <span className="material-symbols-rounded text-xl me-2">
                    add
                  </span>
                  <TextSmallRegular>New Event</TextSmallRegular>
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-white dark:bg-dark">
                <DialogHeader>
                  <DialogTitle className="text-dark dark:text-white">
                    Create your event
                  </DialogTitle>
                </DialogHeader>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8 flex flex-col justify-center"
                  >
                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Event Title</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter event title" {...field} />
                          </FormControl>
                          <FormDescription>
                            The name or title of your event.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Event Description</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Describe your event"
                              className="resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Event Date</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "w-[240px] flex justify-between items-center pl-3 text-left font-normal",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value ? (
                                    format(field.value, "PPP")
                                  ) : (
                                    <span>Pick a date</span>
                                  )}

                                  <span className="material-symbols-outlined text-lg text-dark/50 dark:text-white/50">
                                    event
                                  </span>
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent
                              className="w-auto p-0"
                              align="start"
                            >
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                
                                initialFocus
                                className="bg-white dark: bg-dark"
                              />
                            </PopoverContent>
                          </Popover>

                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="location"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Event Location</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter event location"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="organizer"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Event Organizer</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter organizer name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit">Create Event</Button>
                  </form>
                </Form>
              </DialogContent>
            </Dialog>
          </div>
          <OderList data={orderHistory} itemsPerPage={10} />
        </div>
      </div>
      {isNotificationPanelActive && <NotificationPanel />}
    </div>
  );
}
