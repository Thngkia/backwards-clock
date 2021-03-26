let globalTimeDifference = null
let inputState = null
let rollbackTime = null

let actualTime = () => {
  let date = new Date()
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
  document.getElementById('actual-time').innerHTML = time
  setTimeout(actualTime, 1000)
}

let clockDisplay = (date) => {
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
  document.getElementById('clock').innerHTML = time
}

let forwardsClockDisplay = () => {
  if (!rollbackTime) {
    rollbackTime = new Date()
  } else {
    let msValue = rollbackTime.getMilliseconds()
    rollbackTime.setMilliseconds(msValue + 1000)
    console.log('foward time', rollbackTime)
  }
  clockDisplay(rollbackTime)
}

let backwardClockDisplay = () => {
  if (!rollbackTime) {
    rollbackTime = new Date()
    console.log('here', rollbackTime)
  } else {
    let msValue = rollbackTime.getMilliseconds()
    rollbackTime.setMilliseconds(msValue - 1000)
    console.log('rollback time', rollbackTime)
  }

  // change display
  clockDisplay(rollbackTime)

  // change input state
  if (inputState > 1) {
    inputState = inputState - 1
  } else {
    inputState = null
  }
}

let setInputTime = (e) => {
  let time = document.getElementById('rollback').value
  inputState += parseInt(time)
  e.preventDefault()
}

document.getElementById('form').addEventListener('submit', setInputTime)

// constantly check the input state every 10 seconds
let checkInputState = () => {
  console.log(inputState)
  if (!inputState) {
    forwardsClockDisplay()
  } else {
    backwardClockDisplay()
  }
  setTimeout(checkInputState, 1000)
}

//initialise the application
checkInputState()
actualTime()
