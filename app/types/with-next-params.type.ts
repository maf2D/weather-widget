import { NextFetchParams } from './next-fetch-params.type';

export type WithNextParams<T extends (...args: any[]) => any> = (
  ...args: [...Parameters<T>, NextFetchParams?]
) => ReturnType<T>;
