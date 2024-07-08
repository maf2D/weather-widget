'use client';

import { Typography, Grid } from '@mui/material';
import styled from '@emotion/styled';

export const GridContainer = styled(Grid)(({ theme }) => ({
  padding: '1rem',

  backgroundColor: theme.palette.darkGrey
}));

export const GridItem = styled(Grid)(({ theme }) => ({
  textAlign: 'center',
}));

export const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.orange,

  marginBottom: '2rem'
}));

export const Text = styled(Typography)(({ theme }) => ({
  color: theme.palette.white,
  marginBottom: '0.5rem'
}));

export const TextSmall = styled(Typography)(({ theme }) => ({
  color: theme.palette.white,
  marginBottom: '0.5rem',

  '& span.red': {
    color: theme.palette.red,
    paddingRight: '0.3rem'
  },

  '& span.blue': {
    color: theme.palette.blue,
    paddingLeft: '0.3rem'
  }
}));