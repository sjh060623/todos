const day = document.getElementById("daytext");
const day2 = document.getElementById("daytextw");

function dayCount() {
  const today = new Date().getDate();
  day.innerText = today;

  const todaycoun = new Date().getDay();
  let arr = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];
  day2.innerText = arr[todaycoun];
}

dayCount();
