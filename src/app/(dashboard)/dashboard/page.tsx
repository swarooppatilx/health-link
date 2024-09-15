'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent } from '@radix-ui/react-tabs';

import {
  LayoutDashboard,
  Search,
  Settings,
  Users,
  UserCircle,
  Briefcase,
  Building2,
  CreditCard,
  Package,
  Flag,
  HelpCircle,
  Calendar,
  Bell,
  TestTube,
} from 'lucide-react';
import { Overview } from '@/components/dashboard/Overview';
import { Patients } from '@/components/dashboard/Patients';
import { Appointments } from '@/components/dashboard/Appointments';
import { LabReports } from '@/components/dashboard/LabReports';
import { Inventory } from '@/components/dashboard/Inventory';

export default function Dashboard() {
  const [activeTab, setActiveTab] = React.useState('overview');

  return (
    <div className='flex h-screen bg-gray-100'>
      {/* Sidebar */}
      <aside className='w-64 bg-white p-6 shadow-md'>
        <div className='mb-8 flex items-center'>
          <div className='mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-nhs-blue text-white'>
            <LayoutDashboard size={20} />
          </div>
          <h1 className='text-xl font-bold'>Health Link</h1>
        </div>
        <p className='mb-6 text-xs text-gray-500'>Medical Admin Dashboard</p>
        <nav>
          <h2 className='mb-4 text-xs font-semibold text-gray-500'>
            Main Menu
          </h2>
          <ul className='space-y-2'>
            <li>
              <Button
                variant='ghost'
                className={`w-full justify-start ${activeTab === 'overview' ? 'text-nhs-blue' : ''}`}
                onClick={() => setActiveTab('overview')}
              >
                <LayoutDashboard className='mr-2' size={20} />
                Overview
              </Button>
            </li>
            <li>
              <Button
                variant='ghost'
                className={`w-full justify-start ${activeTab === 'patients' ? 'text-nhs-blue' : ''}`}
                onClick={() => setActiveTab('patients')}
              >
                <Users className='mr-2' size={20} />
                Patients
              </Button>
            </li>
            <li>
              <Button
                variant='ghost'
                className={`w-full justify-start ${activeTab === 'appointments' ? 'text-nhs-blue' : ''}`}
                onClick={() => setActiveTab('appointments')}
              >
                <Calendar className='mr-2' size={20} />
                Appointments
              </Button>
            </li>
            <li>
              <Button
                variant='ghost'
                className={`w-full justify-start ${activeTab === 'lab' ? 'text-nhs-blue' : ''}`}
                onClick={() => setActiveTab('lab')}
              >
                <TestTube className='mr-2' size={20} />
                Lab Reports
              </Button>
            </li>
          </ul>
        </nav>
        <nav className='mt-8'>
          <h2 className='mb-4 text-xs font-semibold text-gray-500'>
            Other menu
          </h2>
          <ul className='space-y-2'>
            <li>
              <Button variant='ghost' className='w-full justify-start'>
                <UserCircle className='mr-2' size={20} />
                Doctors
              </Button>
            </li>
            <li>
              <Button variant='ghost' className='w-full justify-start'>
                <Briefcase className='mr-2' size={20} />
                Employee
              </Button>
            </li>
            <li>
              <Button variant='ghost' className='w-full justify-start'>
                <Building2 className='mr-2' size={20} />
                Department
              </Button>
            </li>
            <li>
              <Button variant='ghost' className='w-full justify-start'>
                <CreditCard className='mr-2' size={20} />
                Payment
              </Button>
            </li>
            <li>
              <Button
                variant='ghost'
                className={`w-full justify-start ${activeTab === 'inventory' ? 'text-nhs-blue' : ''}`}
                onClick={() => setActiveTab('inventory')}
              >
                <Package className='mr-2' size={20} />
                Inventory
              </Button>
            </li>
          </ul>
        </nav>
        <nav className='mt-8'>
          <h2 className='mb-4 text-xs font-semibold text-gray-500'>
            Help & Settings
          </h2>
          <ul className='space-y-2'>
            <li>
              <Button variant='ghost' className='w-full justify-start'>
                <HelpCircle className='mr-2' size={20} />
                Help & Center
              </Button>
            </li>
            <li>
              <Button variant='ghost' className='w-full justify-start'>
                <Settings className='mr-2' size={20} />
                Settings
              </Button>
            </li>
            <li>
              <Button variant='ghost' className='w-full justify-start'>
                <Flag className='mr-2' size={20} />
                Report
              </Button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main className='flex-1 overflow-auto p-8'>
        <div className='mb-8 flex items-center justify-between'>
          <div>
            <h1 className='text-3xl font-bold'>Welcome, John Doe</h1>
            <p className='text-gray-500'>
              Here is the latest update for the last 7 days. Check now
            </p>
          </div>
          <div className='relative flex items-center'>
            <Search className='absolute left-3 text-gray-400' size={20} />
            <Input
              className='w-64 rounded-full py-2 pl-10 pr-4'
              placeholder='Search anything here'
            />
            <Button variant='ghost' size='icon' className='ml-2'>
              <Bell size={20} />
            </Button>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsContent value='overview'>
            <Overview />
          </TabsContent>
          <TabsContent value='patients'>
            <Patients />
          </TabsContent>
          <TabsContent value='appointments'>
            <Appointments />
          </TabsContent>
          <TabsContent value='lab'>
            <LabReports />
          </TabsContent>
          <TabsContent value='inventory'>
            <Inventory />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
