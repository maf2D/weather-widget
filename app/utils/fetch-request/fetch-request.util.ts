import { NextFetchParams } from '@/types';

type QueryParams = {
  [key: string]: string;
};

type InitialParams = {
  baseUrl: string;
  initialQueryParams?: QueryParams;
};

type Params = {
  route: string;
  queryParams?: QueryParams;
  nextFetchParams?: NextFetchParams;
};

export const fetchRequest = ({
  baseUrl,
  initialQueryParams
}: InitialParams) => async ({
  route,
  queryParams,
  nextFetchParams,
}: Params) => {

  const combinedQueryParams = {
    ...initialQueryParams,
    ...queryParams
  };

  const searchParams = new URLSearchParams(combinedQueryParams);
  const fullUrl = `${baseUrl}${route}?${searchParams}`;

  try {
    const response = await fetch(fullUrl, nextFetchParams);

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    return response.json();
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(`Fetching weather data failed: ${err.message}`);
    } else {
      throw new Error('An unknown error occurred');
    }
  }
};