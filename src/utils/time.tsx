

export function secsToHHMMSS(secs: number): string {

  // Remove fractional component
  secs = Math.trunc(secs);

  // Compute the number of hours and subtract out
  let hours = Math.floor(secs / 3600);
  secs -= hours * 3600;

  // Compute the number of minutes and subtract out
  let minutes = Math.floor(secs / 60);
  secs -= minutes * 60;

  let hoursStr = `${hours}`.padStart(2, '0');
  let minsStr = `${minutes}`.padStart(2, '0');
  let secsStr = `${secs}`.padStart(2, '0');
  return `${hoursStr}:${minsStr}:${secsStr}`;
};