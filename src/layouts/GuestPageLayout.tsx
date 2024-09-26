import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

const dummyGuests = [
  { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', totalContributions: 150, eventsAttended: ['Birthday Party', 'Wedding'] },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210', totalContributions: 300, eventsAttended: ['Wedding', 'Baby Shower'] },
];

export  function GuestPageLayout() {
  const [guests, setGuests] = useState(dummyGuests);
  const [newGuest, setNewGuest] = useState({ name: '', email: '', phone: '' });
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddGuest = () => {
    setGuests([...guests, { ...newGuest, id: guests.length + 1, totalContributions: 0, eventsAttended: [] }]);
    setNewGuest({ name: '', email: '', phone: '' });
  };

  const filteredGuests = guests.filter(guest => 
    guest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    guest.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Guest Management</CardTitle>
      </CardHeader>
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
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Guest</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">Name</Label>
                  <Input 
                    id="name" 
                    value={newGuest.name}
                    onChange={(e) => setNewGuest({...newGuest, name: e.target.value})}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="email" className="text-right">Email</Label>
                  <Input 
                    id="email" 
                    value={newGuest.email}
                    onChange={(e) => setNewGuest({...newGuest, email: e.target.value})}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="phone" className="text-right">Phone</Label>
                  <Input 
                    id="phone" 
                    value={newGuest.phone}
                    onChange={(e) => setNewGuest({...newGuest, phone: e.target.value})}
                    className="col-span-3"
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
                <TableCell>{guest.eventsAttended.join(', ')}</TableCell>
                <TableCell>
                  <Button variant="outline" className="mr-2">Edit</Button>
                  <Button variant="destructive">Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}