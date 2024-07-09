import { FC } from 'react';
import Image from 'next/image';
import { WidgetProps } from '@/components';
import { Title, Text, GridItem, GridContainer } from './one-day-weather.styles';

export const OneDayWeather: FC<WidgetProps> = ({
  city,
  temperature,
  feelsLike,
  iconUrl,
  iconDescription
}) => (
  <GridContainer container>
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

      <Image
        src={iconUrl}
        alt={iconDescription}
        width={70}
        height={70}
      />
    </GridItem>
  </GridContainer>
);
