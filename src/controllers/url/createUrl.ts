import { Request, Response } from 'express';
import { nanoid } from 'nanoid';
import { createUrl } from '../../services/users/createUrl';

export const shortenUrl = async (req: Request, res: Response) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ message: 'URL is required' });
  }

  try {
    const shortCode = nanoid(8); // Generate a nanoid with length 8
    await createUrl({ originalUrl: url, shortCode });

    res.status(201).json({ shortCode });
  } catch (error) {
    console.error('Error shortening URL:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
