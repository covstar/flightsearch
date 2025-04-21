Flight Search App
A responsive flight search application built with React and Material-UI, mimicking Google Flights, using the Sky Scrapper API from RapidAPI.
Features

Search flights by origin, destination, date, and number of adults.
Display flight results with airline, price, and duration.
Responsive design for mobile, tablet, and desktop using MUI Grid.
Error handling and loading states with MUI components.

Prerequisites

Node.js (v18 or higher)
RapidAPI account with a subscription to the Sky Scrapper API

Setup

Clone the repository:
git clone https://github.com/username/flight-search-app.git
cd flight-search-app


Install dependencies:
npm install


Configure API key:

Sign up for a RapidAPI account and subscribe to the Sky Scrapper API (free tier available).
Copy your API key.
In src/api/flights.js, replace 'YOUR_RAPIDAPI_KEY' with your actual RapidAPI key.


Run the application:
npm run dev

Open http://localhost:5173 in your browser.


Usage

Enter origin and destination city codes (e.g., LOND for London, NYCA for New York).
Select a travel date and number of adults.
Click "Search Flights" to view results.
Results display airline, departure time, duration, and price in MUI Cards.

Notes

The Sky Scrapper API requires city codes (e.g., LOND, NYCA). Use the API's autosuggest endpoint to find codes if needed.
Ensure your RapidAPI key is kept secure and not exposed in public repositories.
MUI components are used for a polished, responsive UI.

License
MIT
