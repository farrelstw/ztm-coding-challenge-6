//Question no 3
//Write a function that converts HEX to RGB. Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.

//Answer

function hexToRgb(hex) {
  // Check if the hex value is valid
  if (!/^[0-9A-F]{6}$/i.test(hex)) {
    return "Invalid HEX value";
  }

  // Convert the hex value to RGB
  let r = parseInt(hex.slice(0, 2), 16);
  let g = parseInt(hex.slice(2, 4), 16);
  let b = parseInt(hex.slice(4, 6), 16);

  return `rgb(${r}, ${g}, ${b})`;
}

console.log(hexToRgb("00FF00"));

// Console log if invalid hex value
console.log(hexToRgb("00FF00FF"));
