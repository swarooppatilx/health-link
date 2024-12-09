import { NextResponse } from 'next/server';
import { type ListItem } from '@/types/basic';

const healthItems: ListItem[] = [
  {
    title: 'Health Record',
    link: '/health/records',
  },
  {
    title: 'Test results and imaging',
  },
  {
    title: 'COVID-19 vaccine record',
  },
  {
    title: 'COVID Pass',
  },
  {
    title: 'Your health choices',
  },
];

export function GET() {
  return NextResponse.json(healthItems);
}
