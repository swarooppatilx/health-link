'use client';

import { useEffect, useState } from 'react';
import { type ListItem } from '@/types/basic';
import Loading from '@/app/loading';
import { fetcher } from 'utils/fetcher';
import List from '@/components/common/list';

const ServicesSection = () => {
  const [data, setData] = useState<ListItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetcher<ListItem[]>('/api/services');
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

  return <List data={data} title='Services' limit={3} all='/services' />;
};

export default ServicesSection;
