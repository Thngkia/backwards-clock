export function clockDisplay(timeIn) {
  let date = new Date(timeIn)
  let hours = date.getHours()
  let minutes = date.getMinutes()
  let seconds = date.getSeconds()
  // check edge case for hours, mins and sec
  if (hours > 12) {
    hours -= 12
  } else if (hours == 0) {
    hours = '00'
  } else if (hours < 10) [(hours = `0${hours}`)]

  if (minutes < 10) {
    minutes = `0${minutes}`
  }

  if (seconds < 10) {
    seconds = `0${seconds}`
  }
  let time = `${hours}:${minutes}:${seconds}`
  return time
}
