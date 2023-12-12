//BRIGHTNESS IIPO CALCULTOR

//Event Listener
document.getElementById("btn").addEventListener("click", calculate);

function calculate() {
  // Input
  let r = document.getElementById("Red").value;
  let g = document.getElementById("Green").value;
  let b = document.getElementById("Blue").value;

  // Process
  let brightness = Math.sqrt(0.299 * r ** 2 + 0.587 * g ** 2 + 0.114 * b ** 2);

  // Output
  document.getElementById("result").innerHTML = Math.round(brightness);
  document.getElementById("html").style.backgroundColor = `rgb(${r},${g},${b})`;
}
