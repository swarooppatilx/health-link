import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function createDummyData() {
  // Create Hospitals
  const hospital1 = await prisma.hospital.create({
    data: {
      name: 'City General Hospital',
      description: 'A leading healthcare provider offering top-notch services.',
      availableServices: ['Emergency', 'Outpatient', 'Surgery', 'Laboratory'],
      availableBeds: 100,
      link: 'https://www.citygeneral.com',
      hasLink: true,
    },
  });

  const hospital2 = await prisma.hospital.create({
    data: {
      name: 'Greenwood Medical Center',
      description:
        'A trusted medical facility with state-of-the-art equipment.',
      availableServices: [
        'Cardiology',
        'Orthopedics',
        'Radiology',
        'Maternity',
      ],
      availableBeds: 50,
      link: 'https://www.greenwoodmedical.com',
      hasLink: true,
    },
  });

  // Create Appointments
  const appointment1 = await prisma.appointment.create({
    data: {
      userId: 'clerk1',
      date: new Date('2024-12-05T10:00:00'),
      time: '10:00 AM',
      estimatedTime: '30 minutes',
      hospitalId: hospital1.id,
    },
  });

  const appointment2 = await prisma.appointment.create({
    data: {
      userId: 'clerk2',
      date: new Date('2024-12-06T14:30:00'),
      time: '2:30 PM',
      estimatedTime: '45 minutes',
      hospitalId: hospital2.id,
    },
  });

  // Create Health Records
  const healthRecord1 = await prisma.healthRecord.create({
    data: {
      userId: 'clerk1',
      title: 'Routine Checkup',
      date: new Date('2024-11-25'),
      time: '11:00 AM',
      link: 'https://www.healthrecords.com/record/12345',
    },
  });

  const healthRecord2 = await prisma.healthRecord.create({
    data: {
      userId: 'clerk2',
      title: 'Cardiac Assessment',
      date: new Date('2024-11-20'),
      time: '09:30 AM',
      link: 'https://www.healthrecords.com/record/67890',
    },
  });

  // Create Prescriptions
  const prescription1 = await prisma.prescription.create({
    data: {
      userId: 'clerk1',
      patientName: 'John Doe',
      doctorName: 'Dr. Smith',
      dateIssued: new Date('2024-11-26'),
      medications: {
        create: [
          {
            name: 'Paracetamol',
            dosage: '500mg',
            frequency: 'Twice a day',
            duration: '7 days',
          },
          {
            name: 'Ibuprofen',
            dosage: '200mg',
            frequency: 'Once a day',
            duration: '5 days',
          },
        ],
      },
    },
  });

  const prescription2 = await prisma.prescription.create({
    data: {
      userId: 'clerk2',
      patientName: 'Jane Doe',
      doctorName: 'Dr. Brown',
      dateIssued: new Date('2024-11-30'),
      medications: {
        create: [
          {
            name: 'Amoxicillin',
            dosage: '250mg',
            frequency: 'Three times a day',
            duration: '10 days',
          },
        ],
      },
    },
  });

  // Create Messages
  const message1 = await prisma.message.create({
    data: {
      userId: 'clerk1',
      title: 'Important Notice',
      content:
        'Please remember to bring your medical records to your next appointment.',
    },
  });

  const message2 = await prisma.message.create({
    data: {
      userId: 'clerk2',
      title: 'Reminder',
      content: 'Your prescription will be ready for pickup tomorrow.',
    },
  });

  console.log('Dummy data created successfully.');
}

createDummyData()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
