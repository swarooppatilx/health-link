import { getConnection } from '@/lib/db'; // Assuming getConnection is in lib/db
import { ResultSetHeader, RowDataPacket } from 'mysql2'; // Import ResultSetHeader and RowDataPacket from mysql2

// Define the User interface (structure of the rows returned from MySQL)
export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  createdAt: string;
  updatedAt: string;
}

// Function to get all users
export const getUsers = async (): Promise<User[]> => {
  const connection = await getConnection(); // Get the database connection
  const sql = 'SELECT * FROM users';
  
  const [results] = await connection.execute<RowDataPacket[]>(sql); // Execute the query using the connection
  return results.map(result => ({
    id: result.id,
    firstName: result.firstName,
    lastName: result.lastName,
    email: result.email,
    mobile: result.mobile,
    createdAt: result.createdAt,
    updatedAt: result.updatedAt,
  }));
};

// Function to get a user by ID
export const getUserById = async (id: number): Promise<User | null> => {
  const connection = await getConnection(); // Get the database connection
  const sql = 'SELECT * FROM users WHERE id = ?';
  
  const [results] = await connection.execute<RowDataPacket[]>(sql, [id]); // Execute the query using the connection
  return results.length > 0
    ? {
        id: results[0].id,
        firstName: results[0].firstName,
        lastName: results[0].lastName,
        email: results[0].email,
        mobile: results[0].mobile,
        createdAt: results[0].createdAt,
        updatedAt: results[0].updatedAt,
      }
    : null; // Return the first result if it exists, or null
};

// Function to get a user by email
export const getUserByEmail = async (email: string): Promise<User | null> => {
  const connection = await getConnection(); // Get the database connection
  const sql = 'SELECT * FROM users WHERE email = ?';
  
  const [results] = await connection.execute<RowDataPacket[]>(sql, [email]); // Execute the query using the connection
  return results.length > 0
    ? {
        id: results[0].id,
        firstName: results[0].firstName,
        lastName: results[0].lastName,
        email: results[0].email,
        mobile: results[0].mobile,
        createdAt: results[0].createdAt,
        updatedAt: results[0].updatedAt,
      }
    : null; // Return the first result if it exists, or null
};

// Function to create a new user
export const createUser = async (
  user: Omit<User, 'id' | 'createdAt' | 'updatedAt'>,
): Promise<User> => {
  const connection = await getConnection(); // Get the database connection
  const query = `
    INSERT INTO users (firstName, lastName, email, mobile) 
    VALUES (?, ?, ?, ?)
  `;

  const { firstName, lastName, email, mobile } = user;

  // Ensure that required fields are not null or undefined
  if (!firstName || !lastName || !email || !mobile) {
    throw new Error('Missing required user fields');
  }

  try {
    const [results] = await connection.execute<ResultSetHeader>(query, [
      firstName,
      lastName,
      email,
      mobile,
    ]); // Execute the query using the connection

    const newUser: User = {
      id: results.insertId, // Get insertId from the ResultSetHeader
      firstName,
      lastName,
      email,
      mobile,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    return newUser;
  } catch (err) {
    throw new Error('Error creating user: ' + err); // Catch and throw the error
  }
};
