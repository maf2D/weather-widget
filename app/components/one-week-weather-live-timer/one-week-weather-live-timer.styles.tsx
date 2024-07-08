import styled from '@emotion/styled';
import { Typography } from '@mui/material';

export const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.lightBlue,
  textAlign: 'center',

  marginBottom: '1.5rem'
}));
