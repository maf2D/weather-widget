import { withNextParams } from '@/utils';
import { NextFetchParams, IPApiResponse, WithNextParams } from '@/types';

const apiUrl = process.env.NEXT_PUBLIC_IP_API_URL;
const apiKey = process.env.NEXT_PUBLIC_IP_API_KEY;

export type IpApi = {
  getUserIP: WithNextParams<() => Promise<IPApiResponse>>;
};

export const ipApi: IpApi = {
  getUserIP: withNextParams(() => ipApiRequest('/json')),
};

export const ipApiRequest = async (
  url: string,
  nextFetchParams?: NextFetchParams
) => {
  try {
    const fullUrl = `${apiUrl}${url}`;
    const response = await fetch(
      `${fullUrl}?token=${apiKey}`,
      nextFetchParams || undefined
    );

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    return response.json();
  } catch(err) {
    if (err instanceof Error) {
      throw new Error(`Fetching weather data failed: ${err.message}`);
    } else {
      throw new Error('An unknown error occurred');
    }
  }
};
