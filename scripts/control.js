const btn = document.getElementById("carBtn");
const img = document.getElementById("carimg");

let count = 0;

function btnC() {
  if (count === 0) {
    count++;
    img.src = "./img/charge.png";
  } else if (count === 1) {
    count--;
    img.src = "./img/back.png";
  }
  console.log(count);
}
btn.addEventListener("click", btnC);
