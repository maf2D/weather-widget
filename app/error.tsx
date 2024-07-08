'use client';

import { FC } from 'react';
import { Typography, Grid, Button } from '@mui/material';
import { NextErrorPageProps } from '@/types';

const ErrorPage: FC<NextErrorPageProps> = ({ error, reset }) => (
  <Grid textAlign='center' mt={8}>
    <Typography>
      {error.message || 'There is something wrong. Please try again later.'}
    </Typography>

    <Button onClick={reset}>
      Reload
    </Button>
  </Grid>
);

export default ErrorPage;
