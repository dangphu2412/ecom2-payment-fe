import { format, intervalToDuration } from 'date-fns';

export function formatDate(date: Date): string {
  return format(date, 'dd-MM-yyyy');
}

export function calculateRemainingTime(date: Date): string {
  const { hours, minutes, seconds } = intervalToDuration({
    start: new Date(date),
    end: new Date()
  });

  if (hours) {
    return hours + ' Hours';
  }

  if (minutes) {
    return minutes + ' Minutes';
  }

  return seconds + ' Seconds';
}
