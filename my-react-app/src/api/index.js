

const baseURL = "https://api.weatherapi.com/v1/current.json?key=7294963318894a5cab6154320252609";


export const getWeatherDataForCity = async (city) => {
    try {
        const response = await fetch(`${baseURL}&q=${city}&aqi=yes`);
       return await response.json();
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}