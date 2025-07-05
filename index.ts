import express from 'express';
import cors from 'cors';
import { scrapeEarthquakeData } from './scraper';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/api/earthquakes', async (req, res) => {
  try {
    const data = await scrapeEarthquakeData();
    res.json(data);
  } catch (error) {
    console.error('Error fetching earthquake data:', error);
    res.status(500).json({ error: 'Failed to fetch earthquake data' });
  }
});

app.get('/', (_req, res) => {
  res.send('🌍 Earthquake Scraper API is running');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
