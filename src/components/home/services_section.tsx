'use client';

import useSWR from 'swr';
import { type ListItem } from '@/types/basic';
import Loading from '@/app/loading';
import { fetcher } from '@/lib/fetcher';
import List from '@/components/common/list';

const ServicesSection = () => {
  const { data, isLoading } = useSWR<ListItem[]>('/api/services', fetcher);

  if (isLoading) {
    return <Loading />;
  }

  return <List data={data ?? []} title='Services' limit={3} all='/services' />;
};

export default ServicesSection;
