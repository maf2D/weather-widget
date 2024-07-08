import { FC } from 'react';
import Image from 'next/image';
import { Grid } from '@mui/material';
import { getDayNameByDate } from '@/utils';
import {
  DailyWeather,
  OneWeekWeatherLiveTimer,
  WidgetProps
} from '@/components';
import {
  CityTitle,
  OneWeekWeatherContainer,
  Text,
  TextSmall,
  WeatherList,
  WeatherListItem
} from './one-week-weather.styles';

export const OneWeekWeather: FC<WidgetProps> = ({
  city,
  temperature,
  feelsLike,
  iconUrl,
  iconDescription,
  forecastDays,
  precip,
  uv,
  windChill,
  humidity
}) => {

  // current day temperature
  const { maxtemp_c: maxTemp, mintemp_c: minTemp } = forecastDays[0].day;

  // detailed weather info list
  const detailedInfo = [
    { title: 'Precip', value: precip },
    { title: 'Chill', value: windChill },
    { title: 'UV', value: uv },
    { title: 'Humidity', value: humidity }
  ];

  return (
    <OneWeekWeatherContainer>
      <OneWeekWeatherLiveTimer />

      <Grid container>
        <Grid item xs={4}>
          <CityTitle variant='h1'>
            {city}
          </CityTitle>

          <Text color='primary'>
            {temperature} &deg;C
          </Text>

          <Text color='primary'>
            Feels {feelsLike} &deg;C
          </Text>
        </Grid>

        <Grid item xs={4}>
          <Image
            src={iconUrl}
            alt={iconDescription}
            width={100}
            height={100}
          />
        </Grid>

        <Grid item xs={4} textAlign='right'>
          <WeatherList>

            {detailedInfo.map(({ title, value }) => (
              <WeatherListItem key={title}>
                {title}: {value}
              </WeatherListItem>
            ))}

          </WeatherList>

          <TextSmall>
            <span className='red'>
              {maxTemp}
            </span>
            |
            <span className='blue'>{minTemp}</span>
            &deg;C
          </TextSmall>
        </Grid>
      </Grid>

      <Grid container>

        {forecastDays.map(({ date, day }) => {
          const { text, icon } = day.condition;
          const { maxtemp_c: maxTemp, mintemp_c: minTemp } = day;

          const dayName = getDayNameByDate(date);

          return (
            <Grid item xs={2} key={date}>
              <DailyWeather
                day={dayName}
                description={text}
                img={`https:${icon}`}
                maxTemp={maxTemp}
                minTemp={minTemp}
              />
            </Grid>
          );
        })}

      </Grid>
    </OneWeekWeatherContainer>
  );
};
