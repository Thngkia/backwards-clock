'use strict'

import { clockDisplay } from './module.js'

// init global vars
let inputState = null
let rollbackTime = null

// function to display the current time
let actualTime = () => {
  let date = new Date()
  let time = clockDisplay(date)
  document.getElementById('actual-time').innerHTML = time
  setTimeout(actualTime, 1000)
}

// to calculate date as it travels forwards
let forwardsClockDisplay = () => {
  if (!rollbackTime) {
    rollbackTime = new Date()
  } else {
    let msValue = rollbackTime.getSeconds()
    rollbackTime.setSeconds(msValue + 1)
    console.log('foward time', rollbackTime)
  }
  let time = clockDisplay(rollbackTime)
  document.getElementById('clock').innerHTML = time
  document.getElementById('direction').innerHTML = 'forward'
}

// to calculate date as it travels forwards
let backwardClockDisplay = () => {
  if (!rollbackTime) {
    rollbackTime = new Date()
    console.log('here', rollbackTime)
  } else {
    let msValue = rollbackTime.getSeconds()
    rollbackTime.setSeconds(msValue - 1)
    console.log('rollback time', rollbackTime)
  }

  // change display
  let time = clockDisplay(rollbackTime)
  document.getElementById('clock').innerHTML = time
  document.getElementById('direction').innerHTML = 'backwards'
  inputState = inputState - 1
}

let setInputTime = (e) => {
  let time = document.getElementById('rollback').value
  inputState += parseInt(time)
  e.preventDefault()
}
document.getElementById('form').addEventListener('submit', setInputTime)
// constantly check the input state every 10 seconds
let checkInputState = () => {
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
