// date: 2024-07-03, return: Monday, Tuesday ...
export const getDayNameByDate = (date: string) => {
  const d = new Date(date);

  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long' }
  ).format(d);
};

// return: 00:00:00
export const getCurrentTime = () => {
  const now = new Date();

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  return `${hours}:${minutes}:${seconds}`;
};

// return: July 6
export const getCurrentDate = () => {
  const now = new Date();

  const options = { month: 'long' as 'long', day: 'numeric' as 'numeric' };
  return new Intl.DateTimeFormat('en-US', options).format(now);
};