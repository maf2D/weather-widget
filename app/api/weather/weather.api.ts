import {
  NextFetchParams,
  WeatherErrorResponse,
  WeatherResponse,
  WithNextParams
} from '@/types';
import { withNextParams } from '@/utils';

const apiUrl = process.env.NEXT_PUBLIC_WEATHER_API_URL;
const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

type WeatherApi = {
  getTodayWeather: WithNextParams<
    (city: string) => Promise<Omit<WeatherResponse, 'forecast'>>
  >;

  getForecastWeather: WithNextParams<
    ({ city, days }: { city: string; days?: number }) => Promise<WeatherResponse>
  >;
};

export const weatherApi: WeatherApi = {
  getTodayWeather: withNextParams(
    (city) => weatherApiRequest(`/current.json?q=${city}`)
  ),

  getForecastWeather: withNextParams(
    ({ city, days = 3 }) => weatherApiRequest(
      `/forecast.json?q=${city}&days=${days}`
    )
  )
};

export const weatherApiRequest = async(
  url: string,
  nextFetchParams?: NextFetchParams
) => {
  try {
    const fullUrl = `${apiUrl}${url}`;
    const response = await fetch(
      `${fullUrl}&key=${apiKey}`,
      nextFetchParams || undefined
    );

    if (!response.ok) {
      const { error } = await response.json() as WeatherErrorResponse;

      throw new Error(error.message);
    }

    return response.json();
  } catch(err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    } else {
      throw new Error('An unknown error occurred');
    }
  }
};
