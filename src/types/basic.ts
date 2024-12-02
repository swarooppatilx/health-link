// types.ts

export type ListItem = {
  title: string;
  link?: string;
};

export type Message = {
  id: string;
  userId: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export type Hospital = {
  id: string;
  name: string;
  description: string | null;
  availableServices: string[];
  availableBeds: number | null;
  link: string | null;
  hasLink: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type Appointment = {
  id: string;
  userId: string;
  date: Date;
  time: string;
  estimatedTime: string;
  hospitalId: string;
  createdAt: Date;
  updatedAt: Date;
};

export type HealthRecord = {
  id: string;
  userId: string;
  title: string;
  date: Date;
  time: string;
  link: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Prescription = {
  id: string;
  userId: string;
  patientName: string;
  doctorName: string;
  dateIssued: Date;
  medications: Medication[];
  instructions: string | null;
  createdAt: Date;
  updatedAt: Date;
};

export type Medication = {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  duration: string;
  prescriptionId: string | null;
  prescription: Prescription | null;
};
