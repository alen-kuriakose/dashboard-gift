import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Navbar, NotificationPanel } from "@/components";
import { GiftsSection } from "@/components/sections";
import { TextSmallSemibold } from "@/components/typography";
import {
  EnableNotificationPanel,
  ActiveIndexServicesCard,
} from "@/states/GlobalState";
import { usePathname } from "next/navigation";
import { useRecoilValue } from "recoil";

const dummyGuests = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phone: "123-456-7890",
    totalContributions: 150,
    eventsAttended: ["Birthday Party", "Wedding"],
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "987-654-3210",
    totalContributions: 300,
    eventsAttended: ["Wedding", "Baby Shower"],
  },
];

export function GuestPageLayout() {
  const [guests, setGuests] = useState(dummyGuests);
  const [newGuest, setNewGuest] = useState({ name: "", email: "", phone: "" });
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddGuest = () => {
    setGuests([
      ...guests,
      {
        ...newGuest,
        id: guests.length + 1,
        totalContributions: 0,
        eventsAttended: [],
      },
    ]);
    setNewGuest({ name: "", email: "", phone: "" });
  };

  const filteredGuests = guests.filter(
    (guest) =>
      guest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guest.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
              Guests
            </TextSmallSemibold>
          </div>

          <Card className="w-full border-0 shadow-none">
            <CardContent>
              <div className="flex justify-between mb-4">
                <Input
                  className="w-1/3"
                  placeholder="Search guests..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Add New Guest</Button>
                  </DialogTrigger>
                  <DialogContent className="bg-white dark:bg-dark">
                    <DialogHeader>
                      <DialogTitle className="text-dark dark:text-white">Add New Guest</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right w-fit  text-dark dark:text-white">
                          Name
                        </Label>
                        <Input
                          id="name"
                          value={newGuest.name}
                          onChange={(e) =>
                            setNewGuest({ ...newGuest, name: e.target.value })
                          }
                          className="col-span-3 text-dark dark:text-white"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="email" className="text-right w-fit  text-dark dark:text-white">
                          Email
                        </Label>
                        <Input
                          id="email"
                          value={newGuest.email}
                          onChange={(e) =>
                            setNewGuest({ ...newGuest, email: e.target.value })
                          }
                          className="col-span-3 text-dark dark:text-white"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="phone" className="text-right w-fit  text-dark dark:text-white">
                          Phone
                        </Label>
                        <Input
                          id="phone"
                          value={newGuest.phone}
                          onChange={(e) =>
                            setNewGuest({ ...newGuest, phone: e.target.value })
                          }
                          className="col-span-3 text-dark dark:text-white"
                        />
                      </div>
                    </div>
                    <Button onClick={handleAddGuest}>Add Guest</Button>
                  </DialogContent>
                </Dialog>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Total Contributions</TableHead>
                    <TableHead>Events Attended</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredGuests.map((guest) => (
                    <TableRow key={guest.id}>
                      <TableCell>{guest.name}</TableCell>
                      <TableCell>{guest.email}</TableCell>
                      <TableCell>{guest.phone}</TableCell>
                      <TableCell>${guest.totalContributions}</TableCell>
                      <TableCell>{guest.eventsAttended.join(", ")}</TableCell>
                      <TableCell>
                        <Button variant="outline" className="mr-2 w-20">
                          Edit
                        </Button>
                        <Button variant="default">Delete</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
      {isNotificationPanelActive && <NotificationPanel />}
    </div>
  );
}
