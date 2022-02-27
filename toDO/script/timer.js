const $timer = document.querySelector('#timer');
const $timerRecord = $timer.querySelector('#timerrecord');
const $start = $timer.querySelector('#start');
const $stop = $timer.querySelector('#stop');
const $reset = $timer.querySelector('#reset')

let $seconds = 0;
let $minutes = 0;
let $hours = 0;
let intervalId;
let clickable = true;
let timer = [];

const TIMER_KEY = "timer";
function paintText(){
  $timerRecord.textContent = `${String($hours).padStart(2, "0")} : ${String($minutes).padStart(2, "0")} : ${String($seconds).padStart(2, "0")}`
}
function startTime(){
  if(clickable)
  intervalId= setInterval(function(){
    $seconds+=1;
    if($seconds > 59){
      $seconds = 0;
      $minutes += 1;
    if($minutes > 59){
      $minutes = 0;
      $hours +=1
    }
    }
    paintText()
  }, 1000);
  clickable= false
}
function saveTimer(){
  localStorage.setItem(TIMER_KEY, JSON.stringify(timer))
}
function stopTime(){
  clearInterval(intervalId)
  clickable = true;
  timer=[];
  timer.push($hours)
  timer.push($minutes)
  timer.push($seconds)
  saveTimer();
}
function resetTimer(){
  clearInterval(intervalId)
  clickable = true;
   $seconds = 0;
   $minutes = 0;
   $hours = 0;
   timer = [0 , 0 , 0];
   saveTimer();
   paintText()
}

$start.addEventListener('click', startTime)
$stop.addEventListener('click', stopTime)
$reset.addEventListener('click', resetTimer);

const savedTime = localStorage.getItem(TIMER_KEY)
const parsedTimer = JSON.parse(savedTime);

if(savedTime !== null){
  timer = parsedTimer
  $hours = timer[0];
  $minutes = timer[1];
  $seconds = timer[2];
  paintText()
}
