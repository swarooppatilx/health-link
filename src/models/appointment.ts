import { getConnection } from '@/lib/db'; // Assuming getConnection is in lib/db
import { ResultSetHeader, RowDataPacket } from 'mysql2'; // Import ResultSetHeader and RowDataPacket from mysql2

// Define the Appointment interface
export interface Appointment {
  id: number;
  hospitalId: string;
  date: Date;
  symptoms: string;
  duration: string;
  painSeverity: string;
  underlyingConditions: string;
  createdAt: string;
  updatedAt: string;
}

// Function to get all appointments
export const getAppointments = async (): Promise<Appointment[]> => {
  const connection = await getConnection(); // Get the database connection
  const sql = 'SELECT * FROM appointments';

  const [results] = await connection.execute<RowDataPacket[]>(sql); // Execute the query using the connection and expect RowDataPacket[]
  return results.map((result) => ({
    id: result.id,
    hospitalId: result.hospitalId,
    date: result.date,
    symptoms: result.symptoms,
    duration: result.duration,
    painSeverity: result.painSeverity,
    underlyingConditions: result.underlyingConditions,
    createdAt: result.createdAt,
    updatedAt: result.updatedAt,
  }));
};

// Function to get an appointment by ID
export const getAppointmentById = async (
  id: number,
): Promise<Appointment | null> => {
  const connection = await getConnection(); // Get the database connection
  const sql = 'SELECT * FROM appointments WHERE id = ?';

  const [results] = await connection.execute<RowDataPacket[]>(sql, [id]); // Execute the query using the connection
  return results.length > 0
    ? {
        id: results[0].id,
        hospitalId: results[0].hospitalId,
        date: results[0].date,
        symptoms: results[0].symptoms,
        duration: results[0].duration,
        painSeverity: results[0].painSeverity,
        underlyingConditions: results[0].underlyingConditions,
        createdAt: results[0].createdAt,
        updatedAt: results[0].updatedAt,
      }
    : null; // Return the first result if it exists, or null
};

// Function to create a new appointment
export const createAppointment = async (
  hospitalId: string,
  date: Date,
  symptoms: string,
  duration: string,
  painSeverity: string,
  underlyingConditions: string,
): Promise<Appointment> => {
  const connection = await getConnection(); // Get the database connection
  const sql =
    'INSERT INTO appointments (hospitalId, date, symptoms, duration, painSeverity, underlyingConditions) VALUES (?, ?, ?, ?, ?, ?)';

  const [result] = await connection.execute<ResultSetHeader>(sql, [
    hospitalId,
    date,
    symptoms,
    duration,
    painSeverity,
    underlyingConditions,
  ]);

  // Get the insertId from the ResultSetHeader result
  const appointmentId = result.insertId;

  return {
    id: appointmentId,
    hospitalId,
    date,
    symptoms,
    duration,
    painSeverity,
    underlyingConditions,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
};
