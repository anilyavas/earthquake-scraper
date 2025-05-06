import axios from 'axios';
import * as cheerio from 'cheerio';

const url = 'https://deprem.afad.gov.tr/last-earthquakes.html';

async function scrapeEarthquakeData() {
  try {
    const { data } = await axios.get(url);

    const $ = cheerio.load(data);

    const table = $('table');

    const earthquakeData: Array<{
      date: string;
      latitude: string;
      longitude: string;
      depth: string;
      magnitude: string;
      location: string;
    }> = [];

    table.find('tr').each((index, element) => {
      if (index === 0) return;

      const cols = $(element).find('td');
      if (cols.length > 0) {
        const date = $(cols[0]).text().trim();
        const latitude = $(cols[1]).text().trim();
        const longitude = $(cols[2]).text().trim();
        const depth = $(cols[3]).text().trim();
        const magnitude = $(cols[4]).text().trim();
        const location = $(cols[5]).text().trim();

        earthquakeData.push({
          date,
          latitude,
          longitude,
          depth,
          magnitude,
          location,
        });
      }
    });

    console.log(earthquakeData);
  } catch (error) {
    console.error('Error scraping data:', error);
  }
}

scrapeEarthquakeData();
