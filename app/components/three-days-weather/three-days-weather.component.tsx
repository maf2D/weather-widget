import { FC } from 'react';
import Image from 'next/image';
import { Grid } from '@mui/material';
import { getDayNameByDate } from '@/utils';
import { DailyWeather, WidgetProps } from '@/components';
import {
  GridContainer,
  GridItem,
  Text,
  TextSmall,
  Title
} from './three-days-weather.styles';

export const ThreeDaysWeather: FC<WidgetProps> = ({
  city,
  temperature,
  feelsLike,
  iconUrl,
  iconDescription,
  forecastDays
}) => (
  <GridContainer container>
    <Grid item xs={6}>
      <Grid container>
        <GridItem item xs={6}>
          <Title variant='h1'>
            {city}
          </Title>

          <Text>
            {temperature}&deg;C
          </Text>

          <Text>
            Feels {feelsLike}&deg;C
          </Text>

          <TextSmall>
            <span className='red'>9</span>
            |
            <span className='blue'>1</span>
            &deg;C
          </TextSmall>
        </GridItem>

        <GridItem item xs={6}>
          <Image
            src={iconUrl}
            alt={iconDescription}
            width={100}
            height={100}
          />
        </GridItem>
      </Grid>
    </Grid>

    <Grid item xs={6}>
      <Grid container>

        {forecastDays.map(({ date, day }, idx) => {
          const { text, icon } = day.condition;
          const { maxtemp_c: maxTemp, mintemp_c: minTemp } = day;

          const dayName = getDayNameByDate(date);

          // don't show current day
          if (idx > 0) {
            return (
              <Grid item xs={6} key={date}>
                <DailyWeather
                  day={dayName}
                  description={text}
                  img={`https:${icon}`}
                  maxTemp={maxTemp}
                  minTemp={minTemp}
                />
              </Grid>
            );
          }

          return null;
        })}

      </Grid>
    </Grid>
  </GridContainer>
);
