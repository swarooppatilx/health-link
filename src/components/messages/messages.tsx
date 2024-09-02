'use client';

import { useEffect, useState } from 'react';
import { type Messages } from '@/types/basic';
import Spinner from '../common/spinner';


const MessagesComponent = () => {
  // Initialize state with type Messages or an empty array
  const [data, setData] = useState<Messages>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define an async function to fetch data
    const fetchData = async () => {
      try {
        // Fetch data from the correct API route
        const response = await fetch('/api/messages');

        // Check if the response is not okay (like a 404 or 500)
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        // Attempt to parse the response as JSON
        const result: Messages = await response.json();
        setData(result); // Update state with the fetched data
        console.log(result); // Optional: Log the fetched data
      } catch (error) {
        // Log errors such as network failures or JSON parsing issues
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    void fetchData(); // Call the async function
  }, []);

  if (loading) {
    return <Spinner />;
  }


  return (
    <div className='m-2 text-gray-800'>
      <div className='mb-2 rounded-lg bg-white p-4 shadow-sm'>
        <div className='flex flex-col justify-center'>
          <h3 className='text-xl font-bold text-gray-800'>Messages</h3>
          <p className='text-gray-600'>You have 2 inbox</p>
        </div>
      </div>
      <div className='space-y-4'>
        {data.map((message, index) => (
          <div key={index} className='rounded-lg bg-white p-4 shadow'>
            <h3 className='text-lg font-semibold text-nhs-blue'>
              {message.title}
            </h3>
            <ul className='mt-2 list-disc space-y-1 pl-5 text-sm text-gray-700'>
              {message.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessagesComponent;
