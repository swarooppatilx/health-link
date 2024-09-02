'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

// Define the type for a single service
type ServiceType = {
  title: string;
  description?: string; // Optional, as not all services have descriptions
  link?: string; // Optional, as not all services have links
  hasLink: boolean;
};

// Define the type for the array of services
type ServicesType = ServiceType[];


const App = () => {
  // Initialize state with type ServicesType or null
  const [data, setData] = useState<ServicesType | null>(null); // Default to initialServices for testing

  useEffect(() => {
    // Define an async function to fetch data
    const fetchData = async () => {
      try {
        // Fetch data from the API route
        const response = await fetch('/api/services');

        // Check if the response is not okay (like a 404 or 500)
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        // Attempt to parse the response as JSON
        const result: ServicesType = await response.json();
        setData(result); // Update state with the fetched data
        console.log(result); // Optional: Log the fetched data
      } catch (error) {
        // Log errors such as network failures or JSON parsing issues
        console.error('Error fetching data:', error);
      }
    };

    void fetchData(); // Call the async function
  }, []);

  return (
    <div className="mb-6 p-2">
      <div className="bg-white shadow-sm rounded-lg p-4 mb-6">
        <div className="flex flex-col justify-center">
          <h3 className="text-xl font-bold text-gray-800">Services</h3>
          <p className="text-gray-600">
            Get care and support to help stay well
          </p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md">
        {data?.map((service, index) => (
          <div key={index}>
            {service.hasLink ? (
              <Link href={service.link ?? '#'}>
                <div className="p-4 border-b flex justify-between items-center text-nhs-blue font-bold cursor-pointer">
                  <span>{service.title}</span>
                  <FontAwesomeIcon icon={faChevronRight} className="w-6 h-6" />
                </div>
              </Link>
            ) : (
              <div className="p-4 border-b flex justify-between items-center text-nhs-blue font-bold">
                <span>{service.title}</span>
                <FontAwesomeIcon icon={faChevronRight} className="w-6 h-6" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
