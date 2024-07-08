'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

export const getForecastWeather = async (formData: FormData) => {
  const city = formData.get('city');

  if (city) {

    // get updated data from weather api
    revalidatePath('/');

    // use a new user city
    redirect(`/?city=${city}`);
  }
};
