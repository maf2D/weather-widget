import { getForecastWeather } from '@/actions';
import { TextField, Button } from '@mui/material';
import { FormContainer } from './city-form.styles';

export const CityForm = () => (
  <FormContainer action={getForecastWeather}>
    <TextField
      type='text'
      name='city'
      placeholder='Enter your city'
    />

    <Button
      type='submit'
      disabled={false}
    >
      Find
    </Button>
  </FormContainer>
);
