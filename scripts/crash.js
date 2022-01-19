const btn = document.getElementById("btn");

function reload() {
  location.replace("index.html");
}

btn.addEventListener("click", reload);
