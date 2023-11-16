const container = document.createElement("div");
container.classList.add("container");

let n = 4;

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
