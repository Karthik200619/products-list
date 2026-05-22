# Country Explorer

A React-based web application that allows users to explore information about countries worldwide. It fetches data from the REST Countries API and provides search functionality to easily find specific countries.

## ✨ Features

- **Fetch & Display:** Retrieves country data (name, capital, population, region, flag) from an external API.
- **Search Functionality:** Real-time filtering of countries by name.
- **Responsive Design:** A clean, mobile-friendly interface built with Tailwind CSS.
- **Loading & Error States:** Provides visual feedback during data fetching or if an error occurs.

## 🛠️ Tech Stack

- **React 19**
- **Vite**
- **Tailwind CSS 4**
- **REST Countries API**

## 🚀 Getting Started

### Prerequisites
- Node.js installed on your machine.

### Installation

1. Clone the repository and navigate to the project folder:
   ```bash
   cd country-explorer
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open `http://localhost:5173` in your browser.

## 📂 Project Structure

- `src/components/`: Contains reusable React components (`SearchBar`, `CountryList`, etc.).
- `src/App.jsx`: Main application component managing state and API calls.
