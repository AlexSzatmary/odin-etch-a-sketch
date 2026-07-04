const CONTAINER_SIZE = 500;
container = document.querySelector("#container");
container.style.width = CONTAINER_SIZE + "px";
container.style.height = CONTAINER_SIZE + "px";
// const container_width = parseInt(container.style.width);

let nx = 16;
const square_size = CONTAINER_SIZE / nx + "px";
for (let i = 0; i < nx * nx; i++) {
  const div = document.createElement("div");
  div.style.width = square_size;
  div.style.height = square_size;
  div.style.backgroundColor = "blue";
  div.style.opacity = "10%";
  // div.textContent = "asdf";
  div.addEventListener(
    "mouseover",
    () => (div.style.opacity = +div.style.opacity + 0.1),
  );
  container.appendChild(div);
}
