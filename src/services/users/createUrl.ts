import db from '../../config/database/mysql';
import { Url } from '../../modules/users/model';

export const createUrl = async (url: Url): Promise<void> => {
  await db.query(
    'INSERT INTO urls (originalUrl, shortCode, clicks, referringDomains) VALUES (?, ?, ?, ?)',
    [url.originalUrl, url.shortCode, url.clicks || 0, url.referringDomains || ''],
  );
};
