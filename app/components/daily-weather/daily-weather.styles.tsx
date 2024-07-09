'use client';

import { Typography, Box } from '@mui/material';
import styled from '@emotion/styled';

export const DailyWeatherContainer = styled(Box)(({ theme }) => ({
  padding: '1rem',

  backgroundColor: theme.palette.darkGrey,
  textAlign: 'center'
}));

export const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.orange,

  marginBottom: '1rem',
}));

export const Description = styled(Typography)(({ theme }) => ({
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
