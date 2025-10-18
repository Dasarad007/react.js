# 🌦️ Weather App (React)

A simple and responsive **Weather App** built with **React** that fetches **real-time weather data** using the **OpenWeather API**.  
Enter any city name to instantly view temperature, weather condition, humidity, and wind speed — all updated in real-time.

---

## 🚀 Features

- 🌍 Fetches **real-time weather** data using [OpenWeather API](https://openweathermap.org/api)  
- 🔍 Search weather by **city name**  
- 🌡️ Displays **temperature, humidity, condition, and wind speed**  
- ⚡ Built using **React + Fetch API**  
- 🎨 Simple and responsive UI with CSS  
- 🕒 Fast, lightweight, and beginner-friendly  

---

## 🧩 Tech Stack

- **Frontend:** React (Vite or Create React App)  
- **Styling:** CSS  
- **API:** [OpenWeather API](https://openweathermap.org/)  

---

## 📁 Project Structure

📦 weather-app
┣ 📂 src
┃ ┣ 📜 App.jsx
┃ ┣ 📜 App.css
┃ ┗ 📜 main.jsx
┣ 📜 package.json
┣ 📜 vite.config.js (if using Vite)
┗ 📜 README.md

yaml
Copy code

---

## 🔑 Setup & Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/weather-app.git
   cd weather-app
Install dependencies

bash
Copy code
npm install
Get your API key

Go to OpenWeather API

Sign up and generate your API key

Add your API key

You can place it directly in the code (like shown)

OR, for better security, create an .env file:

bash
Copy code
VITE_WEATHER_API_KEY=your_api_key_here
Then, replace your API key in code with:

javascript
Copy code
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
Run the app

bash
Copy code
npm run dev
Build for production

bash
Copy code
npm run build

🧠 Future Improvements
🌤️ Add 7-day forecast

📍 Fetch weather based on current location

🌈 Add dark/light mode

📱 Improve mobile UI

🤝 Contributing
Contributions are welcome!
If you find a bug or have suggestions, feel free to open an issue or submit a pull request.