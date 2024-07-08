export const withNextParams = <T>(
  cb: (...args: any[]) => Promise<T>
) => (...args: any[]) => cb(...args);
