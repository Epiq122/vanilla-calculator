const calculatorDisplay = document.querySelector("h1");
const inputBtns = document.querySelectorAll("button");
const clearBtn = document.getElementById("clear-btn");

let firstValue = 0;
let awaitingNextValue = false;

function addNumberValue(num) {
  if (awaitingNextValue) {
    calculatorDisplay.textContent = num;
    awaitingNextValue = false;
  } else {
    let displayValue = calculatorDisplay.textContent;
    calculatorDisplay.textContent =
      displayValue === "0" ? num : (displayValue += num);
  }
}

inputBtns.forEach((inputBtn) => {
  if (inputBtn.classList.length === 0) {
    inputBtn.addEventListener("click", () => addNumberValue(inputBtn.value));
  }
});
