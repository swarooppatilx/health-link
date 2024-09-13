'use client';

import { useEffect, useState } from 'react';
import { type ListItem } from '@/types/basic';
import Loading from '@/app/loading';
import { fetcher } from 'utils/fetcher';
import List from '@/components/common/list';

const HealthSection = () => {
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

  return <List data={data} title='Health' limit={2} all='/health' />;
};

export default HealthSection;
