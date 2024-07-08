export type NextFetchParams = {
  cache?: 'force-cache' | 'no-store';
  next: {
    revalidate?: false | 0 | number;
    tags?: string[];
  };
};
