export const debounce = (
  cb: (...args: any[]) => void,
  delay: number
) => {
  let timer: NodeJS.Timeout | null = null;

  return (...args: any[]) => {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};
