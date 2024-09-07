export type HealthItem = {
  title: string;
  link?: string;
  hasLink: boolean;
};

export type HealthItems = HealthItem[];

export type ServiceItem = {
  title: string;
  description?: string;
  link?: string;
  hasLink: boolean;
};

export type ServiceItems = ServiceItem[];

export type Message = {
  title: string;
  items: string[];
};

export type Messages = Message[];

export type HospitalItem = {
  id: string;
  name: string;
  description?: string;
  availableServices?: string[];
  availableBeds?: number;
  link?: string;
  hasLink: boolean;
};

export type HospitalItems = HospitalItem[];
