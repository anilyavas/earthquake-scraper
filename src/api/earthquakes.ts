// api/earthquakes.ts
import { VercelRequest, VercelResponse } from '@vercel/node';
import { scrapeEarthquakeData } from '../scraper';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const data = await scrapeEarthquakeData();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching earthquake data:', error);
    res.status(500).json({ error: 'Failed to fetch earthquake data' });
  }
}
