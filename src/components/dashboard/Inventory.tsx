import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const inventory = [
  {
    id: 1,
    name: 'Paracetamol',
    category: 'Medicine',
    quantity: 500,
    unit: 'tablets',
  },
  {
    id: 2,
    name: 'Surgical Masks',
    category: 'Equipment',
    quantity: 1000,
    unit: 'pieces',
  },
  {
    id: 3,
    name: 'Blood Pressure Monitor',
    category: 'Device',
    quantity: 50,
    unit: 'units',
  },
];

export function Inventory() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Inventory Management</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='mb-4 flex justify-between'>
          <Input placeholder='Search inventory...' className='max-w-sm' />
          <Button>Add New Item</Button>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Unit</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {inventory.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>{item.unit}</TableCell>
                <TableCell>
                  <Button variant='ghost' size='sm'>
                    Update
                  </Button>
                  <Button variant='ghost' size='sm'>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
