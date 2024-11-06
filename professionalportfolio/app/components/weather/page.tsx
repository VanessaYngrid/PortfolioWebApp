'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image'; // Import next/image for optimized images

interface WeatherData {
    temperature: number;
    description: string;
    feelLike: number;
    icon: string; 
}

export default function Weather() {
    const [weatherData, setWeatherData] = useState<WeatherData>({
        temperature: 0,
        description: "",
        feelLike: 0,
        icon: "", 
    });

    useEffect(() => {
        const fetchData = async () => {
            const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
            const baseUrl = 'https://api.openweathermap.org/data/3.0/onecall';
            const lat = 45.5017;
            const lon = -73.5673;

            const url = `${baseUrl}?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error("Failed to fetch weather data");
                const data = await response.json();

                const weather: WeatherData = {
                    temperature: Math.round(data.current.temp),
                    description: data.current.weather[0].description,
                    feelLike: Math.round(data.current.feels_like),
                    icon: data.current.weather[0].icon, // Obtener el código del ícono
                };

                setWeatherData(weather);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchData();
    }, []);

    // Construct the icon URL using OpenWeather's icon code
    const iconUrl = weatherData.icon 
        ? `https://openweathermap.org/img/wn/${weatherData.icon}@2x.png` 
        : '/default-icon.png'; // Fallback to a default image if icon is missing

    return (
        <div className="text-white p-2 text-sm flex items-center">
            {weatherData.icon && ( // Only render the image if an icon is available
                <Image 
                    src={iconUrl} 
                    alt={weatherData.description} 
                    width={32} // Width and height for the image
                    height={32} 
                    className="mr-2" // Apply styling here
                />
            )}
            <div>
                <span className="inline">
                    <p className="inline">{weatherData.temperature} °C</p>
                    <p className="inline ml-2">{weatherData.description}</p> 
                </span>
                <p className="mt-1">Feels like: {weatherData.feelLike} °C</p>
            </div>
        </div>
    );
}
