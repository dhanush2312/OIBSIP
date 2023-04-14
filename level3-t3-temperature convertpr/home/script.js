// Get references to DOM elements
const tempInput = document.getElementById('temp');
const unitSelect = document.getElementById('unit');
const convertBtn = document.getElementById('convert-btn');
const convertedTemp = document.getElementById('converted-temp');

// Define conversion functions
function convertToCelsius(temp, unit) {
  switch (unit) {
    case 'fahrenheit':
      return (temp - 32) * 5 / 9;
    case 'kelvin':
      return temp - 273.15;
    default:
      return temp;
  }
}

function convertToFahrenheit(temp, unit) {
  switch (unit) {
    case 'celsius':
      return temp * 9 / 5 + 32;
    case 'kelvin':
      return temp * 9 / 5 - 459.67;
    default:
      return temp;
  }
}

function convertToKelvin(temp, unit) {
  switch (unit) {
    case 'celsius':
      return temp + 273.15;
    case 'fahrenheit':
      return (temp + 459.67) * 5 / 9;
    default:
      return temp;
  }
}

// Define event listener for button click
convertBtn.addEventListener('click', function() {
  const temp = parseFloat(tempInput.value);
  const unit = unitSelect.value;
  let converted;

  switch (unit) {
    case 'celsius':
      converted = convertToFahrenheit(temp, unit);
      break;
    case 'fahrenheit':
      converted = convertToCelsius(temp, unit);
      break;
    case 'kelvin':
      converted = convertToCelsius(temp, unit);
      break;
    default:
      converted = temp;
  }

  convertedTemp.innerText = converted.toFixed(2);
});
