import { Request,Response } from "express";
import { getUrlStats } from "../../services/users/getUrlStats";

export const getUrlStatistics = async (req: Request, res: Response) => {
    const { shortCode } = req.params;
  
    try {
      const url = await getUrlStats(shortCode);
  
      if (!url) {
        return res.status(404).json({ message: 'URL not found' });
      }
  
      res.status(200).json({
        originalUrl: url.originalUrl,
        clicks: url.clicks,
        referringDomains: url.referringDomains
      });
    } catch (error) {
      console.error('Error fetching URL statistics:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };