let img = document.querySelectorAll(".item img");
let index = 0;

function prev() {
  img[index].style.display = "none";
  if (index < img.length - 1) index++;
  else index = 0;
  img[index].style.display = "block";
}

function forw() {
  img[index].style.display = "none";
  if (index === 0) index = img.length - 1;
  else index--;
  img[index].style.display = "block";
}

let time = setInterval(forw, 2000);

function playpause(opction) {
  if (opction === "pasue") {
    clearInterval(time);
  } else {
  time =    setInterval(forw, 2000);
  }
}
