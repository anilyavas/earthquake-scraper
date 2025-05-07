# Earthquake Data Scraper

## Overview

The Earthquake Data Scraper is a Node.js application that scrapes the latest earthquake data from the Turkish Disaster and Emergency Management Authority (AFAD) website. The application provides a simple API endpoint to access the scraped data in JSON format.

## Features

- Scrapes real-time earthquake data, including:
  - Date and time of the earthquake
  - Latitude and longitude of the epicenter
  - Depth of the earthquake
  - Magnitude of the earthquake
  - Location of the earthquake
- Provides a RESTful API endpoint to access the data.

## Technologies Used

- **Node.js**: JavaScript runtime for building the server.
- **Express**: Web framework for Node.js to create the API.
- **Axios**: Promise-based HTTP client for making requests to the AFAD website.
- **Cheerio**: jQuery-like library for parsing and manipulating HTML.

## Getting Started

### Prerequisites

- Node.js (v12 or higher)
- npm (Node package manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/earthquake-scraper.git
   cd earthquake-scraper

   npm install
   
   node server.js