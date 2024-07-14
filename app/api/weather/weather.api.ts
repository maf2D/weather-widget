import { fetchRequest } from '@/utils';
import { WeatherResponse, WithNextParams } from '@/types';

type WeatherApi = {
  getTodayWeather: WithNextParams<
    ({ city }: { city: string }) => Promise<Omit<WeatherResponse, 'forecast'>>
  >;

  getForecastWeather: WithNextParams<
    ({ city, days }: { city: string; days?: number }) => Promise<WeatherResponse>
  >;
};

const apiUrl = process.env.NEXT_PUBLIC_WEATHER_API_URL!;
const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY!;

const weatherApiRequest = fetchRequest({
  baseUrl: apiUrl,
  initialQueryParams: { key: apiKey }
});

export const weatherApi: WeatherApi = {
  getTodayWeather: ({ city }) => weatherApiRequest({
    route: '/current.json',
    queryParams: { q: city }
  }),

  getForecastWeather: ({ city, days = 3 }) => weatherApiRequest({
    route: '/forecast.json',
    queryParams: {
      q: city,
      days: days.toString()
    }
  })
};
