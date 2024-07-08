import { FC } from 'react';
import Image from 'next/image';
import {
  DailyWeatherContainer,
  Title,
  TextSmall,
  Description
} from './daily-weather.styles';

type DailyWeatherProps = {
  day: string;
  img: string;
  description: string;
  minTemp: number;
  maxTemp: number;
};

export const DailyWeather: FC<DailyWeatherProps> = ({
  day,
  img,
  description,
  minTemp,
  maxTemp
}) => (
  <DailyWeatherContainer>
    <Title variant='h5'>
      {day}
    </Title>

    <Image
      src={img}
      alt={description}
      width={70}
      height={70}
    />

    <Description>
      {description}
    </Description>

    <TextSmall>
      <span className='red'>
        {maxTemp}
      </span>
      |
      <span className='blue'>
        {minTemp}
      </span>
      &deg;C
    </TextSmall>
  </DailyWeatherContainer>
);
