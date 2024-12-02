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

const labReports = [
  {
    id: 1,
    patientName: 'John Doe',
    testType: 'Blood Test',
    date: '2023-06-15',
    status: 'Completed',
  },
  {
    id: 2,
    patientName: 'Jane Smith',
    testType: 'X-Ray',
    date: '2023-06-16',
    status: 'Pending',
  },
  {
    id: 3,
    patientName: 'Alice Johnson',
    testType: 'MRI',
    date: '2023-06-17',
    status: 'In Progress',
  },
];

export function LabReports() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Lab Reports</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='mb-4 flex justify-between'>
          <Input placeholder='Search reports...' className='max-w-sm' />
          <Button>Add New Report</Button>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Patient Name</TableHead>
              <TableHead>Test Type</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {labReports.map((report) => (
              <TableRow key={report.id}>
                <TableCell>{report.patientName}</TableCell>
                <TableCell>{report.testType}</TableCell>
                <TableCell>{report.date}</TableCell>
                <TableCell>{report.status}</TableCell>
                <TableCell>
                  <Button variant='ghost' size='sm'>
                    View
                  </Button>
                  <Button variant='ghost' size='sm'>
                    Edit
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
