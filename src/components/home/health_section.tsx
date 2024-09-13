'use client';

import useSWR from 'swr';
import { type ListItem } from '@/types/basic';
import Loading from '@/app/loading';
import { fetcher } from '@/lib/fetcher';
import List from '@/components/common/list';

const HealthSection = () => {
  const { data, isLoading } = useSWR<ListItem[]>('/api/health', fetcher);

  if (isLoading) {
    return <Loading />;
  }

  return <List data={data ?? []} title='Health' limit={2} all='/health' />;
};

export default HealthSection;
