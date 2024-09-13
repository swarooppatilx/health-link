'use client';

import { useEffect, useState } from 'react';
import { type ListItem } from '@/types/basic';
import List from '@/components/common/list';
import Loading from '@/app/loading';
import { fetcher } from 'utils/fetcher';

const App = () => {
  const [data, setData] = useState<ListItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetcher<ListItem[]>('/api/health');
        setData(result);
        console.log(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    void fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <List
      data={data}
      title='Your Health'
      subtitle='View your personal records and choices'
    />
  );
};

export default App;
