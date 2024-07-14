'use client';

import { FC, useContext } from 'react';
import { AppContext } from '@/contexts';
import { WeatherResponse, ForecastDay } from '@/types';
import { WIDGET_SIZE } from '@/constants';
import { Loader, OneDayWeather, OneWeekWeather, ThreeDaysWeather }
  from '@/components';

export type WidgetProps = {
  city: string;
  temperature: number;
  feelsLike: number;
  iconUrl: string;
  iconDescription: string;
  forecastDays: ForecastDay[];
  precip: number;
  uv: number;
  windChill: number;
  humidity: number;
};

type WidgetContainerProps = {
  weatherData: WeatherResponse;
};

export const WidgetContainer: FC<WidgetContainerProps> = ({ weatherData }) => {

  const { widgetSize } = useContext(AppContext);
  const { location, forecast, current } = weatherData;

  const widgetProps: WidgetProps = {
    city: location.name,
    forecastDays: forecast.forecastday,
    temperature: current.temp_c,
    feelsLike: current.feelslike_c,
    iconUrl: `https:${current.condition.icon}`,
    iconDescription: current.condition.text,
    precip: current.precip_mm,
    windChill: current.windchill_c,
    uv: current.uv,
    humidity: current.humidity
  };

  if (widgetSize === WIDGET_SIZE['2x2']) {
    return <OneDayWeather {...widgetProps} />;
  }

  if (widgetSize === WIDGET_SIZE['4x2']) {
    return <ThreeDaysWeather {...widgetProps} />;
  }

  if (widgetSize === WIDGET_SIZE['4x4']) {
    return <OneWeekWeather {...widgetProps} />;
  }

  return <Loader text='Detecting widget size...' />
};
