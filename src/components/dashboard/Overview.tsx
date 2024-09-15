import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Activity,
  TrendingUp,
  Users,
  Scissors,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import {
  Bar,
  BarChart as ShadcnBarChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import { Button } from '@/components/ui/button';

const patientData = [
  { name: 'Mon', patient: 950, inpatient: 480 },
  { name: 'Tue', patient: 792, inpatient: 493 },
  { name: 'Wed', patient: 501, inpatient: 150 },
  { name: 'Thu', patient: 800, inpatient: 523 },
  { name: 'Fri', patient: 500, inpatient: 150 },
  { name: 'Sat', patient: 500, inpatient: 150 },
  { name: 'Sun', patient: 280, inpatient: 100 },
];

export function Overview() {
  const [currentDate, setCurrentDate] = React.useState(new Date());

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0,
  ).getDate();
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1,
  ).getDay();

  const renderCalendar = () => {
    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className='p-2 text-sm'></div>);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(
        <div
          key={i}
          className={`p-2 text-sm ${i === 10 ? 'rounded bg-teal-100 text-teal-800' : ''}`}
        >
          {i}
        </div>,
      );
    }
    return days;
  };

  return (
    <>
      <div className='mb-8 grid grid-cols-3 gap-6'>
        <Card className='bg-gradient-to-br from-teal-500 to-teal-600 text-white'>
          <CardHeader className='flex flex-row items-center justify-between pb-2'>
            <CardTitle className='text-lg font-medium'>
              Overall visitors
            </CardTitle>
            <Activity size={20} />
          </CardHeader>
          <CardContent>
            <div className='text-4xl font-bold'>10,525</div>
            <div className='mt-2 flex items-center'>
              <TrendingUp size={16} className='mr-1' />
              <span className='rounded bg-teal-400 px-2 py-1 text-xs text-white'>
                +15.2%
              </span>
              <span className='ml-2 text-sm'>from 5,567 to 7,525 Visitor</span>
            </div>
            <div className='mt-4 h-2 rounded-full bg-teal-400 bg-opacity-50'>
              <div
                className='h-full rounded-full bg-white'
                style={{ width: '70%' }}
              ></div>
            </div>
            <div className='mt-2 text-sm'>1,345 today</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between pb-2'>
            <CardTitle className='text-lg font-medium'>Total patient</CardTitle>
            <Users size={20} className='text-teal-500' />
          </CardHeader>
          <CardContent>
            <div className='text-4xl font-bold'>5,715</div>
            <div className='mt-2 flex items-center'>
              <TrendingUp size={16} className='mr-1 text-green-500' />
              <span className='rounded bg-green-100 px-2 py-1 text-xs text-green-800'>
                +10.4%
              </span>
            </div>
            <div className='mt-4 text-sm text-gray-500'>
              Increase in data by 500 inpatients in the last 7 days
            </div>
            <div className='mt-4 h-2 rounded-full bg-gray-200'>
              <div
                className='h-full rounded-full bg-teal-500'
                style={{ width: '60%' }}
              ></div>
            </div>
            <div className='mt-2 text-sm'>1,345 today</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between pb-2'>
            <CardTitle className='text-lg font-medium'>Surgery</CardTitle>
            <Scissors size={20} className='text-teal-500' />
          </CardHeader>
          <CardContent>
            <div className='text-4xl font-bold'>523</div>
            <div className='mt-2 flex items-center'>
              <TrendingUp size={16} className='mr-1 text-green-500' />
              <span className='rounded bg-green-100 px-2 py-1 text-xs text-green-800'>
                +165
              </span>
            </div>
            <div className='mt-4 text-sm text-gray-500'>
              Visitor data obtained for the last 7 days from 10.2% to 15.7%
            </div>
            <div className='mt-4 h-2 rounded-full bg-gray-200'>
              <div
                className='h-full rounded-full bg-teal-500'
                style={{ width: '60%' }}
              ></div>
            </div>
            <div className='mt-2 text-sm'>1,345 today</div>
          </CardContent>
        </Card>
      </div>

      <div className='grid grid-cols-3 gap-6'>
        <div className='col-span-2'>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between pb-2'>
              <CardTitle className='text-lg font-medium'>
                Patient Statistics
              </CardTitle>
              <div className='flex items-center space-x-2'>
                <div className='flex items-center'>
                  <div className='mr-1 h-3 w-3 rounded-full bg-teal-500'></div>
                  <span className='text-sm'>Patient</span>
                </div>
                <div className='flex items-center'>
                  <div className='mr-1 h-3 w-3 rounded-full bg-yellow-500'></div>
                  <span className='text-sm'>Inpatient</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width='100%' height={300}>
                <ShadcnBarChart data={patientData}>
                  <CartesianGrid strokeDasharray='3 3' stroke='#f0f0f0' />
                  <XAxis dataKey='name' stroke='#888888' />
                  <YAxis stroke='#888888' />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#f8fafc',
                      border: 'none',
                      borderRadius: '8px',
                      boxShadow:
                        '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                    }}
                  />
                  <Legend />
                  <Bar dataKey='patient' fill='#14b8a6' radius={[4, 4, 0, 0]} />
                  <Bar
                    dataKey='inpatient'
                    fill='#eab308'
                    radius={[4, 4, 0, 0]}
                  />
                </ShadcnBarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Calendar at Bottom Right */}
        <div className='col-span-1'>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between pb-2'>
              <CardTitle className='text-lg font-medium'>Calendar</CardTitle>
              <div className='flex space-x-2'>
                <Button
                  variant='outline'
                  size='icon'
                  onClick={() =>
                    setCurrentDate(
                      new Date(
                        currentDate.getFullYear(),
                        currentDate.getMonth() - 1,
                        1,
                      ),
                    )
                  }
                >
                  <ChevronLeft size={20} />
                </Button>
                <Button
                  variant='outline'
                  size='icon'
                  onClick={() =>
                    setCurrentDate(
                      new Date(
                        currentDate.getFullYear(),
                        currentDate.getMonth() + 1,
                        1,
                      ),
                    )
                  }
                >
                  <ChevronRight size={20} />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className='mb-4 text-center'>
                {currentDate.toLocaleString('default', {
                  month: 'long',
                  year: 'numeric',
                })}
              </div>
              <div className='grid grid-cols-7 gap-2 text-center'>
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(
                  (day) => (
                    <div key={day} className='text-xs font-medium'>
                      {day}
                    </div>
                  ),
                )}
                {renderCalendar()}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
