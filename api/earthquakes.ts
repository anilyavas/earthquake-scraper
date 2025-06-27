// api/earthquakes.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { scrapeEarthquakeData } from '../scraper';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const data = await scrapeEarthquakeData();

    if (!data || data.length === 0) {
      return res.status(500).json({ error: 'No data received from scraper.' });
    }

    res.status(200).json(data);
  } catch (error: any) {
    console.error('API error:', error.message || error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
