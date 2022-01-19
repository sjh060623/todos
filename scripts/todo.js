var elements = [];
window.onload = function () {
  if (JSON.parse(localStorage.getItem("elements")) != null)
    elements = JSON.parse(localStorage.getItem("elements"));
  console.log(elements);
  display();
};
function addElement() {
  if (document.querySelector(".addTxt").value.trim() != "") {
    elements.push(document.querySelector(".addTxt").value.trim());
    if (localStorage.getItem("elements") == null) {
      localStorage.setItem("elements", JSON.stringify(elements));
    } else {
      localStorage.setItem("elements", JSON.stringify(elements));
    }
    display();
    document.querySelector(".addTxt").value = "";
  }
}
function display() {
  document.querySelector(".list").innerHTML = "";

  for (var i = 0; i < elements.length; i++)
    document.querySelector(".list").innerHTML +=
      "<center><div style='color: rgb(53, 150, 254)' class='element'>" +
      elements[i] +
      "<img class='tick' src = 'img/icon.png' onclick='strike(" +
      i +
      ")'><img class='dustbin' style='width: 20px; height: 20px;s' src = 'img/icon2.png' onclick='del(" +
      i +
      ")'></div></center><br>";
}
function del(index) {
  elements.splice(index, 1);
  if (localStorage.getItem("elements") == null) {
    localStorage.setItem("elements", JSON.stringify(elements));
  } else {
    localStorage.setItem("elements", JSON.stringify(elements));
  }
  display();
}
function strike(index) {
  if (elements[index].includes("<strike>")) {
    elements[index] = elements[index].replace("<strike>", "");
  } else {
    elements[index] = "<strike>" + elements[index] + "</strike>";
  }
  if (localStorage.getItem("elements") == null) {
    localStorage.setItem("elements", JSON.stringify(elements));
  } else {
    localStorage.setItem("elements", JSON.stringify(elements));
  }
  display();
}
