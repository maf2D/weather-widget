'use client';

import { Typography, Grid } from '@mui/material';
import styled from '@emotion/styled';

export const GridContainer = styled(Grid)(({ theme: { palette } }) => ({
  backgroundColor: palette.mode === 'dark' ? palette.darkGrey : palette.white
}));

export const GridItem = styled(Grid)(({ theme }) => ({
  flexDirection: 'column',
  textAlign: 'center',

  padding: '1rem',
  backgroundColor: theme.palette.darkGrey
}));

export const Title = styled(Typography)(({ theme: { palette } }) => ({
  color: palette.orange,

  paddingBottom: '1rem',
  marginBottom: '1rem',
  borderBottom: '1px solid ' + palette.lightGrey
}));

export const Text = styled(Typography)(({ theme }) => ({
  color: theme.palette.white,
  marginBottom: '0.5rem'
}));
