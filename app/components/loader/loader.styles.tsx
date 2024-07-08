'use client';

import styled from '@emotion/styled';
import { Grid, Box } from '@mui/material';

export const LoaderContainer = styled(Grid)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}));

export const Loader = styled(Box)((props) => ({
  width: 'fit-content',
  fontWeight: 'bold',
  fontSize: '1rem',
  background: 'linear-gradient(90deg,#000 50%,#0000 0) right/200% 100%',
  animation: 'l21 2s infinite linear',

  '&:before': {
    content: `"${props.content}"`,
    color: '#0000',
    padding: '0 5px',
    background: 'inherit',
    backgroundImage: 'linear-gradient(90deg,#fff 50%,#000 0)',
    backgroundClip: 'text',
    webkitBackgroundClip: 'text'
  }
}));
