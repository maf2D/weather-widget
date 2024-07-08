'use client';

import { useEffect, useState } from 'react';
import { getCurrentDate, getCurrentTime } from '@/utils';
import { Title } from './one-week-weather-live-timer.styles';

export const OneWeekWeatherLiveTimer = () => {
  const [time, setTime] = useState(getCurrentTime());
  const [date, setDate] = useState(getCurrentDate());

  // effect that creates live timer
  useEffect(() => {
    const timer = setInterval(() => {
      const newTime = getCurrentTime();

      if (newTime === '00:00:00') {
        const newDate = getCurrentDate();

        setDate(newDate);
      }

      setTime(newTime);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Title variant='h2'>{time} {date}</Title>
  );
};
