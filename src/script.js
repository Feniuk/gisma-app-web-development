const btn = document.getElementById("donate_button");
const cell1 = document.getElementById("cell1");
const cell2 = document.getElementById("cell2");
const cell3 = document.getElementById("cell3");
const cell4 = document.getElementById("cell4");
const table = document.getElementById("table");

cell1.addEventListener("click", painter);
table.addEventListener("click", effective_painter);

function painter(event) {
  event.target.classList.toggle("painter");
}

function effective_painter(event) {
  if (event.target.tagName == "TD") {
    event.target.classList.toggle("painter");
  }
  return;
}

btn.addEventListener("click", function () {
  window.open(
    "https://savelife.in.ua/en/donate-en/#donate-army-card-once",
    "_blank",
  );
});

function areaCalc(w, h) {
  return w * h;
}
areaCalc(2, 4);

function celsToFar(degree) {
  const result = 9.5 * degree + 32;
  return result;
}

function numIsEven(number) {
  if (number / 2 == 0) {
    return True;
  }
  return False;
}

function findMax(array) {
  for (let i = array[0]; i < array.length; i++) {}
}
