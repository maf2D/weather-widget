import { fetchRequest } from '@/utils';
import { IPApiResponse, WithNextParams } from '@/types';

export type IpApi = {
  getUserIP: WithNextParams<() => Promise<IPApiResponse>>;
};

const apiUrl = process.env.NEXT_PUBLIC_IP_API_URL!;
const apiKey = process.env.NEXT_PUBLIC_IP_API_KEY!;

const ipApiRequest = fetchRequest({
  baseUrl: apiUrl,
  initialQueryParams: { token: apiKey }
});

export const ipApi: IpApi = {
  getUserIP: () => ipApiRequest({ route: '/json' })
};
