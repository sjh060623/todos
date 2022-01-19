const clockTitle = document.querySelector(".js-clock");

const getDDay = () => {
  const setDate = new Date("2022-12-25T00:00:00+0900");
  const setDateYear = setDate.getFullYear();
  const setDateMonth = setDate.getMonth() + 1;
  const setDateDay = setDate.getDate();

  const now = new Date();

  const distance = setDate.getTime() - now.getTime();
  
  const day = Math.floor(distance/(1000*60*60*24));
  const hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
  const minutes = Math.floor((distance % (1000*60*60))/(1000*60));
  const seconds = Math.floor((distance % (1000*60))/1000);

  clockTitle.innerText = 
    `${day}d ${hours < 10 ? `0${hours}` : hours}h ${minutes < 10 ? `0${minutes}` : minutes}m ${seconds < 10 ? `0${seconds}` : seconds}s`;
  }


const init = () => {
  getDDay();
  setInterval(getDDay, 1000);
}

init();