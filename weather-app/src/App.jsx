import React, { useState } from 'react';
import './App.css'; 
function App() {
  const [weather, setWeather] = useState(null);
  const [input, setInput] = useState("");

  async function handleWeather() {
    const API_KEY = "1b543e375a6863b85bb51824844bc9f1";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API_KEY}&units=metric`;
    const result = await fetch(url);
    const response = await result.json();

    if (response.cod === 200) {
      setWeather(response);
    } else {
      alert("No city found");
      setWeather(null);
    }
  }

  return (
    <div className="app">
      <h1 className="title">Weather App</h1>
      <div className="input-section">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Enter city"
          className="input"
        />
        <button onClick={handleWeather} className="button">WEATHER</button>
      </div>

      {weather && (
        <div className="weather-info">
          <p><strong>City:</strong> {weather.name}</p>
          <p><strong>Temperature:</strong> {weather.main.temp} °C</p>
          <p><strong>Condition:</strong> {weather.weather[0].description}</p>
              <p><strong>Humidity:</strong> {weather.main.humidity}%</p>
          <p><strong>Wind Speed:</strong> {weather.wind.speed} m/s</p>
          
        </div>
        
      )}
    </div>
  );
}

export default App;
