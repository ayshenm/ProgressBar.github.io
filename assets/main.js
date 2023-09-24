const progress = document.querySelector("#progress");
const circles = document.querySelectorAll(".circle");
const prev = document.querySelector("#prev");
console.log(prev);
const next = document.querySelector("#next");
console.log(next);

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;
  console.log("currentActive");
  currentActive > circles.length ? (currentActive = circles.length) : "";
  update();
});

prev.addEventListener("click", () => {
  currentActive--;
  currentActive < 1 ? (currentActive = 1) : "null";
  update();
});

function update() {
  circles.forEach((circle, index) => {
    index < currentActive ? circle.classList.add("active") : circle.classList.remove("active");
  });
  const actives = document.querySelectorAll(".active");
  console.log(((actives.length - 1) / (circles.length - 1)) * 100 + "%");

  progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  prev.disabled = currentActive === 0 ? true : false;
  next.disabled = currentActive === circles.length ? true : false;

  // currentActive === 1 ? prev.disabled = true : currentActive === circles.length ? next.disabled = true : prev.disabled = false ? next.disabled = true : ""
  // if(currentActive === 1){
  //   prev.disabled = true;
  // }else if(currentActive === circles.length){
  //   next.disabled = true;
  // }else{
  //   prev.disabled = false;
  //   next.disabled = false
  // }
}
