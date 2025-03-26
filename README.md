# Let's Bit Travel

## Overview
The Let's Bit Travel App is a web application designed to help users discover and book travel destinations. It integrates AI-powered APIs to fetch featured destinations and provides an intuitive UI for users to explore, save, and book trips effortlessly.

## Features
- 🌍 **Explore Destinations** – Browse and discover featured travel destinations.
- 🔍 **Search & Filter** – Easily find destinations based on preferences.
- 📍 **Google Maps Integration** – View locations and plan routes.
- 🏨 **Booking System** – Book hotels, flights, and experiences.
- ❤️ **User Profiles** – Save favorite destinations and recent searches.
- 🤖 **AI-Powered Recommendations** – Fetch trending destinations from TripAdvisor API.

## Tech Stack
### Frontend:
- [Next.js](https://nextjs.org/) – For server-side rendering and optimized performance.
- [Tailwind CSS](https://tailwindcss.com/) – For modern, responsive styling.
- [Google Maps API](https://developers.google.com/maps) – For map and location services.

### Backend (Pending Decision):
- **Option 1:** [Express.js](https://expressjs.com/) – A lightweight backend framework for handling API requests.
- **Option 2:** [Python (FastAPI/Django)](https://fastapi.tiangolo.com/) – For building a high-performance backend.

### APIs & Integrations:
- **TripAdvisor API** – Fetches AI-powered travel recommendations.
- **Stripe API (Future)** – For secure booking payments.

## Project Structure
```
Travel
├── frontend
│   ├── app
│   ├── components
│   ├── constants
│   ├── utils
│   ├── public
│   ├── README.md
├── backend (To be implemented)
│   ├── routes
│   ├── controllers
│   ├── models
│   ├── config
│   ├── server.js / main.py
│   ├── README.md
├── .gitignore
├── package.json
├── README.md
```

## Getting Started
### Prerequisites
- Node.js (for frontend development)
- API Keys (Google Maps, TripAdvisor)

### Installation
```sh
# Clone the repository
git clone https://github.com/NatashaJWangui/lets-bit-travel.git
cd Travel

# Install frontend dependencies
cd frontend
npm install

# Run the development server
npm run dev
```

### Environment Variables
Create a `.env.local` file in the `frontend` directory with the following:
```
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
NEXT_PUBLIC_TRIPADVISOR_API_KEY=your_tripadvisor_api_key
```

## Future Enhancements
- 🛫 Flight booking integration.
- 🏖️ Itinerary planning feature.
- 📊 Analytics dashboard for travel trends.

## Contributing
Pull requests are welcome! Feel free to open issues for any bugs or feature requests.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Authors

- **Natasha J Wangui**: Project creator and developer.

## Project Status

- Current status: **Active**

---