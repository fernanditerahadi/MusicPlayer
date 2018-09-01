
export function getFormattedDuration(durationInSecond) {
  let minutes = Math.floor(durationInSecond / 60).toString().slice(-2);
  let seconds = (durationInSecond % 60).toString().slice(-2);
  return minutes + ":" + seconds;
}
