import db from '../../config/database/mysql';
import { Url } from '../../modules/users/model';

export const getUrlStats = async (shortCode: string): Promise<Url | null> => {
  try {
    const [rows]: [any[], any] = await db.query('SELECT * FROM urls WHERE shortCode = ?', [
      shortCode,
    ]);
    return rows.length > 0 ? (rows[0] as Url) : null;
  } catch (error) {
    console.error('Error fetching URL stats by shortCode:', error);
    return null;
  }
};
