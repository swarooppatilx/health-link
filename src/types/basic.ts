export type UserData = {
  id: string;
  name: string;
  dob: string;
  appointments: Appointments;
  health_records: HealthRecords;
};

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

export type Appointment = {
  id: string;
  date: string;
  time: string;
  estimated_time: string;
  hospital: HospitalItem;
};

export type Appointments = Appointment[];

export type HealthRecord = {
  id: string;
  title: string;
  date: string;
  time: string;
  link: string;
};

export type HealthRecords = HealthRecord[];

export type Prescription = {
  id: string;
  patientName: string;
  doctorName: string;
  dateIssued: string;
  medications: Medication[];
  instructions?: string;
};

export type Medication = {
  name: string;
  dosage: string;
  frequency: string;
  duration: string;
};
