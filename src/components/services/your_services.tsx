'use client';

import useSWR from 'swr';
import { type ListItem } from '@/types/basic';
import List from '@/components/common/list';
import Loading from '@/app/loading';
import { fetcher } from '@/lib/fetcher';

const App = () => {
  const { data, isLoading } = useSWR<ListItem[]>('/api/services', fetcher);

  if (isLoading) return <Loading />;

  if (!data) return <div>No data available</div>;

  return (
    <List
      data={data}
      title='Services'
      subtitle='Get care and support to help stay well'
    />
  );
};

export default App;
