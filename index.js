// Code your solution in this file!

const returnFirstTwoDrivers = (arr) => {
  return arr.slice(0, 2)
}

const returnLastTwoDrivers = (arr) => {
  return arr.slice(arr.length -2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


const createFareMultiplier = (num) => {
  return (fare) => {
    return fare * num
  }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (drivers, driverFnc) => {
  return driverFnc(drivers)
}
