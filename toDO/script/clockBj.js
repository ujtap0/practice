const $wrap = document.getElementById('wrap');
const $time = document.getElementById('time');
const $session = document.getElementById('session')
const $date = document.getElementById('date')
let hours;
let minutes;
let seconds;
let session = "AM";

function paintdate(){
  const year = new Date().getFullYear()
  const month = new Date().getMonth()
  const date = new Date().getDate()
  let day = new Date().getDay()
  
  switch (day) {
    case 0 : {day = '일요일'}
    break;
    case 1 : {day = '월요일'}
    break;
    case 2 : {day = '화요일'}
    break;
    case 3 : {day = '수요일'}
    break;
    case 4 : {day = '목요일'}
    break;
    case 5 : {day = '금요일'}
    break;
    case 6 : {day = '토요일'}
    break;
  }
  $date.textContent = `${year}.${month + 1}.${date}  ${day}`
}

function clock (){
  seconds = new Date().getSeconds();
  minutes = new Date().getMinutes();
  hours = new Date().getHours();
  if(hours == 0){
    hours = 12;
  }
  if(hours > 12){
    session = 'Pm';
    hours = hours - 12;
  }
  $time.innerText = `${String(hours).padStart(2, "0")} : ${String(minutes).padStart(2, "0")} : ${String(seconds).padStart(2, "0")}`
  $session.innerText = `${session}`
}

if($session.textContent === 'AM'){
  $wrap.classList.remove('PM');
  $wrap.classList.add('AM');
}else{
  $wrap.classList.remove('AM');
  $wrap.classList.add('PM');
}

clock();
paintdate();
setInterval(clock, 1000);

