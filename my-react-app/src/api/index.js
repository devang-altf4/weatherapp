

const baseURL = `https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_WEATHER_API_KEY}`;


export const getWeatherDataForCity = async (city) => {
    try {
        const response = await fetch(`${baseURL}&q=${city}&aqi=yes`);
       return await response.json();
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}