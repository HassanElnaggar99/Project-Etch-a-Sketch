let n = 16;

function drawPage(num) {
  if (typeof num === "number"
      && num > 0
      && num <= 100) {
    n = num;
  }

  const container = document.createElement("div");
  container.classList.add("container");

  for (let i = 0; i < n; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < n; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      row.appendChild(square);
    }
    container.appendChild(row);
  }

  const body = document.querySelector("body");
  body.appendChild(container);

  container.addEventListener('mouseover', function(e) {
    let square = e.target;
    // console.log(e.target);
    if (square.getAttribute('class') === 'square') {
      square.style.cssText = "background-color: black;";
    }
  });
}

const btn_reset = document.querySelector("#reset");
btn_reset.addEventListener('click', function(e) {
  const container = document.querySelector(".container");
  const body = document.querySelector("body");
  body.removeChild(container);
  drawPage();
});

const btn_new = document.querySelector("#newSize");
btn_new.addEventListener('click', function(e) {
  let gridNumber = Number(prompt("Enter the side length of the grid: "));

  const container = document.querySelector(".container");
  const body = document.querySelector("body");
  body.removeChild(container);
  drawPage(gridNumber);
});

drawPage();
