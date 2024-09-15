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

export function Patients() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Patient Management</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='mb-4 flex justify-between'>
          <Input placeholder='Search patients...' className='max-w-sm' />
          <Button>Add New Patient</Button>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Age</TableHead>
              <TableHead>Gender</TableHead>
              <TableHead>Last Visit</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>John Doe</TableCell>
              <TableCell>45</TableCell>
              <TableCell>Male</TableCell>
              <TableCell>2023-06-15</TableCell>
              <TableCell>
                <Button variant='ghost' size='sm'>
                  View
                </Button>
                <Button variant='ghost' size='sm'>
                  Edit
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jane Smith</TableCell>
              <TableCell>32</TableCell>
              <TableCell>Female</TableCell>
              <TableCell>2023-06-10</TableCell>
              <TableCell>
                <Button variant='ghost' size='sm'>
                  View
                </Button>
                <Button variant='ghost' size='sm'>
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
