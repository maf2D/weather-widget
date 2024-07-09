'use client';

import { Typography, Box, List, ListItem } from '@mui/material';
import styled from '@emotion/styled';

export const OneWeekWeatherContainer = styled(Box)(({ theme }) => ({
  padding: '1rem',

  textAlign: 'center',
  backgroundColor: theme.palette.darkGrey
}));

export const CityTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.orange,

  marginBottom: '1rem'
}));

export const Text = styled(Typography)(({ theme }) => ({
  color: theme.palette.blue,
  marginBottom: '0.5rem'
}));

export const TextSmall = styled(Typography)(({ theme: { palette } }) => ({
  color: palette.white,
  marginBottom: '0.5rem',

  '& span.red': {
    color: palette.red,
    paddingRight: '0.3rem'
  },

  '& span.blue': {
    color: palette.blue,
    paddingLeft: '0.3rem'
  }
}));

export const WeatherList = styled(List)(() => ({
  padding: '0.5rem'
}));

export const WeatherListItem = styled(ListItem)(({ theme }) => ({
  color: theme.palette.white,

  padding: 0,
  justifyContent: 'right',
  fontSize: '0.9rem'
}));