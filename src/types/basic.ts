// Define the type for a single health item
export type HealthItem = {
  title: string;
  link?: string; // Optional, as not all items have links
  hasLink: boolean;
};

// Define the type for an array of health items
export type HealthItems = HealthItem[];

// Define the type for a single service item
export type ServiceItem = {
  title: string;
  description?: string; // Optional, as not all services have descriptions
  link?: string; // Optional, as not all services have links
  hasLink: boolean;
};

// Define the type for an array of service items
export type ServiceItems = ServiceItem[];

// Define the type for a single message
export type Message = {
  title: string;
  items: string[]; // Define items as an array of strings
};

// Define the type for an array of messages
export type Messages = Message[];
