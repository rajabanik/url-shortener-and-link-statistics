import db from '../../config/database/mysql';
import { Url } from '../../modules/users/model';

export const getUrlByShortCode = async (shortCode: string): Promise<Url | null> => {
  if (!shortCode || shortCode.trim() === '') {
    throw new Error('Invalid short code');
  }

  try {
    console.log(`Fetching URL for shortCode: ${shortCode}`);

    const [rows]: [any[], any] = await db.query('SELECT * FROM urls WHERE shortCode = ?', [
      shortCode,
    ]);

    console.log('Query result:', rows);

    return rows.length > 0 ? (rows[0] as Url) : null;
  } catch (error) {
    console.error('Error fetching URL by shortCode:', error);
    throw error; // Rethrow the error to propagate it up the call stack
  }
};
