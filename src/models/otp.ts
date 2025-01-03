import { getConnection } from '@/lib/db'; // Assuming getConnection is in lib/db
import nodemailer from 'nodemailer';
import { RowDataPacket } from 'mysql2'; // Importing RowDataPacket to define result rows

// Interface to represent the OTP data
interface OTPVerification {
  id: number;
  email: string;
  otp: string;
  createdAt: string;
  expiresAt: string;
}

// Function to generate OTP
const generateOtp = (): string => {
  return Math.floor(100000 + Math.random() * 900000).toString(); // Generates a 6-digit OTP
};
// Function to create and store OTP in the database
export const createOtp = async (email: string): Promise<OTPVerification> => {
  const otp = generateOtp();
  const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // OTP expires in 10 minutes

  // Ensure the values are not undefined
  if (!email || !otp || !expiresAt) {
    throw new Error('Invalid input for OTP creation.');
  }

  const sql =
    'INSERT INTO otp_verifications (email, otp, expiresAt) VALUES (?, ?, ?)';

  // Get the connection and execute the query
  const connection = await getConnection();
  const [result] = await connection.execute<RowDataPacket[]>(sql, [
    email,
    otp,
    expiresAt,
  ]);

  // Type the result explicitly
  return {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    id: (result as any).insertId, // Get the insertId from the result
    email,
    otp,
    createdAt: new Date().toISOString(),
    expiresAt: expiresAt.toISOString(),
  };
};


export const verifyOtp = async (
  email: string,
  otp: string,
): Promise<boolean> => {
  console.log('Verifying OTP for email:', email); // Debugging

  const sql =
    'SELECT * FROM otp_verifications WHERE email = ? ORDER BY createdAt DESC LIMIT 1';

  // Get the connection and execute the query
  const connection = await getConnection();
  const [results] = await connection.execute<RowDataPacket[]>(sql, [email]);

  console.log('Query results:', results); // Debugging

  if (results.length === 0) {
    console.log('No OTP record found for email:', email); // Debugging
    return false; // No OTP record found
  }

  const storedOtp = results[0].otp;
  const expiresAt = new Date(results[0].expiresAt);

  console.log('Stored OTP:', storedOtp); // Debugging
  console.log('Expires At:', expiresAt); // Debugging

  // Ensure that the OTP and expiry date are valid
  if (!storedOtp || !expiresAt.getTime()) {
    console.log('Invalid data fetched for email:', email); // Debugging
    return false; // Invalid data fetched
  }

  // Check if the OTP matches and hasn't expired
  if (storedOtp === otp && expiresAt.getTime() > Date.now()) {
    console.log('OTP is valid for email:', email); // Debugging
    return true; // OTP is valid
  }

  console.log('Invalid or expired OTP for email:', email); // Debugging
  return false; // Invalid or expired OTP
};


export async function sendOtp(email: string, otp: string) {
  try {
    // Ensure the environment variables are loaded properly
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      throw new Error('SMTP credentials are not set in environment variables.');
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail', // Or use your preferred email service
      auth: {
        user: process.env.SMTP_USER, // Your email address
        pass: process.env.SMTP_PASS, // Your email password or app-specific password
      },
      tls: {
        rejectUnauthorized: false, // Prevents certain types of SSL/TLS errors
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Your OTP Code',
      text: `Your OTP is: ${otp}`,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('OTP sent:', info.response);
  } catch (error) {
    console.error('Error sending OTP:', error);
    throw new Error('Failed to send OTP email.');
  }
};