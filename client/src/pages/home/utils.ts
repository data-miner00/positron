export enum Time {
  Seconds = 1,
  Miliseconds = Seconds / 1000,
  Minutes = 60,
  Hours = Minutes * 60,
  Days = Hours * 24,
  Weeks = Days * 7,
  Months = Days * 30,
  Years = Months * 12,
}

export function elapsed(unixTime: number, time: Time): number {
  const elapsed = unixTime;
  const now = Date.now();

  const offset = Math.floor(now / 1000) - elapsed;

  return Math.floor(offset / time);
}

export function formatTimeDiff(past: Date): string {
  let formattedTimeString: string;
  const unixTime: number = past.getTime() / 1000;

  switch (true) {
    case elapsed(unixTime, Time.Years) > 0:
      formattedTimeString = elapsed(unixTime, Time.Years) + " yrs ago";
      break;
    case elapsed(unixTime, Time.Months) > 0:
      formattedTimeString = elapsed(unixTime, Time.Months) + " month ago";
      break;
    case elapsed(unixTime, Time.Weeks) > 0:
      formattedTimeString = elapsed(unixTime, Time.Weeks) + " weeks ago";
      break;
    case elapsed(unixTime, Time.Days) > 0:
      formattedTimeString = elapsed(unixTime, Time.Days) + " days ago";
      break;
    case elapsed(unixTime, Time.Hours) > 0:
      formattedTimeString = elapsed(unixTime, Time.Hours) + " hrs ago";
      break;
    case elapsed(unixTime, Time.Minutes) > 0:
      formattedTimeString = elapsed(unixTime, Time.Minutes) + " mins ago";
      break;
    default:
      formattedTimeString = elapsed(unixTime, Time.Seconds) + " seconds ago";
  }

  return formattedTimeString;
}
