import { NextResponse } from 'next/server';
import { type HealthItem } from '@/types/basic';

const healthItems: HealthItem[] = [
  {
    title: 'View and manage prescriptions',
    hasLink: false,
  },
  {
    title: 'Health Record',
    link: '/health/records',
    hasLink: true,
  },
  {
    title: 'Test results and imaging',
    hasLink: false,
  },
  {
    title: 'COVID-19 vaccine record',
    hasLink: false,
  },
  {
    title: 'COVID Pass',
    hasLink: false,
  },
  {
    title: 'Your health choices',
    hasLink: false,
  },
];

export async function GET() {
  return NextResponse.json(healthItems);
}
