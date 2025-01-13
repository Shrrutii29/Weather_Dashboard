const API_URL = 'https://c6b1ce78-47b5-4158-bbac-6d7a9fb83342-00-364lentosq3f0.sisko.replit.dev/weather';

const cityInput = document.getElementById('city_input');
const searchButton = document.getElementById('search_button');
const loadingIndicator = document.getElementById('loading');
const weatherDisplay = document.getElementById('weather_display');
const errorMessage = document.getElementById('error_message');
const previousCitiesList = document.getElementById('previous_cities');

searchButton.addEventListener('click', async () => {
  const cityName = cityInput.value.trim();


  if (!cityName) {
    showError('Please enter a city name !!');
    weatherDisplay.classList.add('hidden');

    return;
  }

  setLoading(true);
  clearDisplay();

  try {
    const response = await fetch(`${API_URL}?city=${cityName}`);
    if (!response.ok) {
      throw new Error('City not found or API issue');
    }
    const data = await response.json();

    if (!data.city || !data.temperature || !data.condition) {
        throw new Error('Invalid weather data received');
      }
    displayWeather(data);
    storeCity(cityName);
    updatePreviousCities();
  } catch (error) {
    showError(`Error: ${error.message}`);
  } finally {
    setLoading(false);
  }
});

function setLoading(isLoading) {
  loadingIndicator.classList.toggle('hidden', !isLoading);
}

function clearDisplay() {
  weatherDisplay.classList.add('hidden');
  errorMessage.classList.add('hidden');
}

function displayWeather(data) {
  document.getElementById('city_name').textContent = data.city;
  document.getElementById('temperature').textContent = `Temperature: ${data.temperature}°C`;
  document.getElementById('condition').textContent = `Condition: ${data.condition}`;
  document.getElementById('humidity').textContent = `Humidity: ${data.humidity}%`;
  document.getElementById('wind_speed').textContent = `Wind Speed: ${data.wind_speed} km/h`;
  weatherDisplay.classList.remove('hidden');
}

function showError(message) {
  errorMessage.textContent = message;
  errorMessage.classList.remove('hidden');
}

function storeCity(city) {
  let cities = JSON.parse(localStorage.getItem('cities')) || [];
  if (!cities.includes(city)) {
    cities.push(city);
    localStorage.setItem('cities', JSON.stringify(cities));
  }
}

function updatePreviousCities() {
  const cities = JSON.parse(localStorage.getItem('cities')) || [];
  previousCitiesList.innerHTML = cities
    .map(city => `<li>${city}</li>`)
    .join('');
}

document.addEventListener("DOMContentLoaded", () => {
  const toggleCities = document.getElementById("toggle_cities");
  const previousCities = document.getElementById("previous_cities");

  toggleCities.addEventListener("click", () => {
    previousCities.classList.toggle("hidden");
    toggleCities.textContent = previousCities.classList.contains("hidden") 
      ? "Previously Searched Cities ▼" 
      : "Previously Searched Cities ▲";
  });
});

updatePreviousCities();
