import db from '../../config/database/mysql';

export const incrementClickCount = async (
  shortCode: string,
  referringDomain: string,
): Promise<void> => {
  await db.query(
    'UPDATE urls SET clicks = clicks + 1, referringDomains = CONCAT(referringDomains, ?) WHERE shortCode = ?',
    [`,${referringDomain}`, shortCode],
  );
};
