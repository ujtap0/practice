const logInForm = document.querySelector('#login')
const logInInput=logInForm.querySelector('input')
const $name = document.querySelector('#name')
const $menu = document.querySelector('#menu')
const oppenInput = $menu.querySelector('button')
const newName = $menu.querySelector('#newname')
const newNameInput = newName.querySelector('input')
let username='';

function paintGreeting(){
  const userName = localStorage.getItem('username')
  $menu.classList.remove('hidden');
  $name.textContent = `안녕하세요. ${userName}님`
}
function saveName (){
  localStorage.setItem('username', username);
  paintGreeting()
}
function getName(event){
  event.preventDefault();
  username = logInInput.value;
  saveName();
  logInForm.classList.add('hidden');
}
function showInput(){
  newName.classList.remove('hidden')
}
function changeName(event){
  event.preventDefault();
  username = newNameInput.value;
  saveName();
  newName.classList.add('hidden');
  newNameInput.value = ''
}
newName.addEventListener('submit', changeName)

oppenInput.addEventListener('click', showInput)

const savedUsername = localStorage.getItem('username');

if(savedUsername === null){
  logInForm.addEventListener('submit', getName)
}else{
  logInForm.classList.add('hidden')
  paintGreeting();
}

