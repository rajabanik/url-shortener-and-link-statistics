import { Request, Response } from 'express';
import { getUrlByShortCode } from '../../services/users/getUrlByShortCode';
import { incrementClickCount } from '../../services/users/incrementClickCount';

export const redirectUrl = async (req: Request, res: Response) => {
  const { shortCode } = req.params;

  try {
    const url = await getUrlByShortCode(shortCode);

    if (!url) {
      return res.status(404).json({ message: 'URL not found' });
    }

    const referringDomain = req.get('Referer') || 'direct';
    await incrementClickCount(shortCode, referringDomain);

    res.redirect(url.originalUrl);
  } catch (error) {
    console.error('Error redirecting URL:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
