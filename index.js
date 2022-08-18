/* requires : follow design spec, generate all coversion when the users click "convert", round the number down to three decimals */
let inputEl = document.querySelector("#input-el")
let length = document.querySelector("#length")
let volume = document.querySelector("#volume")
let mass = document.querySelector("#mass")
const button = document.querySelector("#convert-btn")
let feet = 3.281
let gallon = 0.264
let kilo = 2.204

// Button Convert clicked :
const clicked = button.addEventListener("click", ()=>{
  validateInput(inputEl)
})

// Validates if the input is a number
function validateInput(a) {
  a = document.querySelector("#input-el").value
  if (isNaN(a) || a < 0) {
    inputEl = "invalid"
    console.log("invalid input")
  } else {
    inputEl = Number(a)
    showConversion()
  }
  console.log(typeof inputEl)
}

// Fill the divs with each conversion (Length, Volume, Mass)
function showConversion() {
  conversion(inputEl, feet, length)
  conversion(inputEl, gallon, volume)
  conversion(inputEl, kilo, mass)
  console.log("converted")
}

// Conversion
function conversion(a, b, c) {
  let el = ""
  let el2 = ""
  let result = 0
  result = a * b;
  let input1 = result.toFixed(3)
  result = a / b
  let input2 = result.toFixed(3)
  if (b === 3.281) {
    if (a == 1) {
      el = "meter"
      el2 = "foot"
    } else {
      el = "meters"
      el2 = "feet"
    }
  } else if (b === 0.264) {
    if (a == 1) {
      el = "liter"
      el2 = "gallon"
    } else{
      el = "liters"
      el2 = "gallons"
    }
  } else {
    if (a == 1) {
      el = "kilo"
      el2 = "pound"
    } else {
      el = "kilos"
      el2 = "pounds"
    }
  }
  c.innerHTML = `${a} ${el} = ${input1} ${el2} | ${a} ${el2} = ${input2} ${el}`
}
