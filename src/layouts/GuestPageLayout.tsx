"use client";
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
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
import { EnableNotificationPanel } from "@/states/GlobalState";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Navbar, NotificationPanel } from "@/components";
import { TextSmallSemibold } from "@/components/typography";
import { usePathname } from "next/navigation";
import { useRecoilValue } from "recoil";

// Define the Guest type
type Guest = {
  id: number;
  name: string;
  email: string;
  phone: string;
  totalContributions: number;
  eventsAttended: string[];
};

const dummyGuests: Guest[] = [
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
  const isNotificationPanelActive = useRecoilValue(EnableNotificationPanel);

  const [guests, setGuests] = useState<Guest[]>(dummyGuests);
  const [newGuest, setNewGuest] = useState<
    Omit<Guest, "id" | "totalContributions" | "eventsAttended">
  >({ name: "", email: "", phone: "" });
  const [searchTerm, setSearchTerm] = useState("");
  const [editingGuest, setEditingGuest] = useState<Guest | null>(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [breadcrumbs, setBreadcrumbs] = useState<any>();
  const pathname = usePathname();

  const handleAddGuest = () => {
    try {
      if (!newGuest.name || !newGuest.email || !newGuest.phone) {
        throw new Error("Please fill in all fields");
      }
      const guestToAdd: Guest = {
        ...newGuest,
        id: guests.length + 1,
        totalContributions: 0,
        eventsAttended: [],
      };
      setGuests([...guests, guestToAdd]);
      setNewGuest({ name: "", email: "", phone: "" });
      setError(null);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "An error occurred while adding the guest"
      );
    }
  };

  const handleEditGuest = (guest: Guest) => {
    setEditingGuest(guest);
    setIsEditDialogOpen(true);
    setError(null);
  };

  const handleUpdateGuest = () => {
    try {
      if (!editingGuest) {
        throw new Error("No guest selected for editing");
      }
      if (!editingGuest.name || !editingGuest.email || !editingGuest.phone) {
        throw new Error("Please fill in all fields");
      }
      setGuests(
        guests.map((g) => (g.id === editingGuest.id ? editingGuest : g))
      );
      setIsEditDialogOpen(false);
      setEditingGuest(null);
      setError(null);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "An error occurred while updating the guest"
      );
    }
  };

  const handleDeleteGuest = (id: number) => {
    try {
      setGuests(guests.filter((guest) => guest.id !== id));
      setError(null);
    } catch (err) {
      setError("An error occurred while deleting the guest");
    }
  };

  const filteredGuests = guests.filter(
    (guest) =>
      guest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guest.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          <Card className="w-full border-0 shadow-none">
            <CardContent>
              {error && (
                <Alert variant="destructive" className="mb-4">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
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
                      <DialogTitle className="text-dark dark:text-white">
                        Add New Guest
                      </DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label
                          htmlFor="name"
                          className="text-right w-fit text-dark dark:text-white"
                        >
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
                        <Label
                          htmlFor="email"
                          className="text-right w-fit text-dark dark:text-white"
                        >
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
                        <Label
                          htmlFor="phone"
                          className="text-right w-fit text-dark dark:text-white"
                        >
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
                        <Button
                          variant="outline"
                          className="mr-2 w-20"
                          onClick={() => handleEditGuest(guest)}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="default"
                          onClick={() => handleDeleteGuest(guest.id)}
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>

            <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
              <DialogContent className="bg-white dark:bg-dark">
                <DialogHeader>
                  <DialogTitle className="text-dark dark:text-white">
                    Edit Guest
                  </DialogTitle>
                </DialogHeader>
                {editingGuest && (
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label
                        htmlFor="edit-name"
                        className="text-right w-fit text-dark dark:text-white"
                      >
                        Name
                      </Label>
                      <Input
                        id="edit-name"
                        value={editingGuest.name}
                        onChange={(e) =>
                          setEditingGuest({
                            ...editingGuest,
                            name: e.target.value,
                          })
                        }
                        className="col-span-3 text-dark dark:text-white"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label
                        htmlFor="edit-email"
                        className="text-right w-fit text-dark dark:text-white"
                      >
                        Email
                      </Label>
                      <Input
                        id="edit-email"
                        value={editingGuest.email}
                        onChange={(e) =>
                          setEditingGuest({
                            ...editingGuest,
                            email: e.target.value,
                          })
                        }
                        className="col-span-3 text-dark dark:text-white"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label
                        htmlFor="edit-phone"
                        className="text-right w-fit text-dark dark:text-white"
                      >
                        Phone
                      </Label>
                      <Input
                        id="edit-phone"
                        value={editingGuest.phone}
                        onChange={(e) =>
                          setEditingGuest({
                            ...editingGuest,
                            phone: e.target.value,
                          })
                        }
                        className="col-span-3 text-dark dark:text-white"
                      />
                    </div>
                  </div>
                )}
                <Button onClick={handleUpdateGuest}>Update Guest</Button>
              </DialogContent>
            </Dialog>
          </Card>
        </div>
      </div>
      {isNotificationPanelActive && <NotificationPanel />}
    </div>
  );
}
