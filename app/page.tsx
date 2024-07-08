import { FC } from 'react';
import { CityForm, WidgetContainer } from '@/components';
import { ipApi, weatherApi } from '@/api';
import { NextPageProps } from '@/types';

// revalidate the page each hour
export const revalidate = 3600;

const WidgetPage: FC<NextPageProps> = async ({ searchParams }) => {

  // get user city from query params or from ip api
  const city = searchParams.city as string || (await ipApi.getUserIP()).city;

  // load weather data based on the city
  const weatherResponse = await weatherApi.getForecastWeather({ city });

  return (
    <main>
      <CityForm />

      <WidgetContainer weatherData={weatherResponse} />
    </main>
  );
}

export default WidgetPage;
