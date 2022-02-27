const $toDo = document.getElementById('todo');
const $listMaker = document.getElementById('listmaker');
const $ulmaker = document.getElementById('ulmaker');
let allUl = $toDo.querySelectorAll('ul')
let toDos = [[{ulId: 0,title: 'baselist'}]];

function saveToDos(){
  localStorage.setItem("todos", JSON.stringify(toDos))     
}
function assingUlId(){
allUl = $toDo.querySelectorAll('ul')
allUl.forEach((ul, i)=>{
  ul.id = `${i}`;
})
 for(let i = 0; i < toDos.length ; i++){
   for(let j = 0; j < toDos[i].length; j++){
     toDos[i][j].ulId = i;
   }
  }
}
function deleteToDo(event){
  const li = event.target.parentElement;
  const ulId = li.parentElement.id;
  const parsedUlId = parseInt(ulId)
  console.log(ulId)
  li.remove()
  toDos[parsedUlId] = toDos[parsedUlId].filter((toDo) => toDo.id !== parseInt(li.id))
  saveToDos()
}
function paintToDos(toDoObj){
  const li = document.createElement('li');
  const span = document.createElement('span');
  const deleteBtn = document.createElement('button')
  deleteBtn.innerText = "X";
  deleteBtn.addEventListener('click', deleteToDo)
  allUl[toDoObj.ulId].append(li)
  li.append(span, deleteBtn)
  li.id = toDoObj.id
  span.textContent = `${toDoObj.text}`
}
function saveValue(event, input){
  event.preventDefault();
  const inputValue = input.value;
  const ulId = event.target.parentNode.id;
  const parsedulId = parseInt(ulId)
  const newToDoObj = {
    ulId: parsedulId,
    id: Date.now(),
    text : inputValue,
  }
  event.target.parentNode.removeChild(event.target);
  toDos[ulId].push(newToDoObj);
  paintToDos(newToDoObj)
  saveToDos();
}
function makeList(ulId){
  assingUlId()
  const form = document.createElement('form');
  const input = document.createElement('input');
  allUl[ulId].append(form);
  form.append(input);
  form.addEventListener('submit', (event)=>saveValue(event, input));
}
$listMaker.addEventListener('click', () => makeList(0))

function removeUl(event, deleteUl, makelist, title){
  const ul = event.target.parentNode
  const ulId = ul.id
  ul.removeChild(deleteUl, makelist, title)
  const allLi = ul.querySelectorAll('li');
  allLi.forEach(function(li){
    li.remove()
  })
  ul.remove()
  toDos.splice(ulId, 1);
  assingUlId();
  saveToDos();
}

function paintTitle(event, ul, ulId, input, title){
  event.preventDefault();
  title = input.value
  ul.querySelector('h2').textContent = title;
  event.target.remove();
  const toDoObj = {
    ulId: parseInt(ulId),
    title: title
  }
  toDos[ulId].push(toDoObj);
  saveToDos();
}
function makeUl(){
  const ul = document.createElement('ul');
  $toDo.append(ul)
  toDos.push([]);
  assingUlId()
  const ulId = ul.id
  const form = document.createElement('form');
  const input = document.createElement('input');
  const deleteUl = document.createElement('button')
  const makelist = document.createElement('button')
  const title = document.createElement('h2');
  deleteUl.innerText="X"
  makelist.innerText="+"
  form.append(input);
  ul.append(form, title, deleteUl, makelist);
  deleteUl.addEventListener('click',(event) => removeUl(event, deleteUl, makelist, title))
  form.addEventListener('submit', (event) => paintTitle(event, ul, ulId, input, title))
  makelist.addEventListener('click', () => makeList(ulId))
}

$ulmaker.addEventListener('click', makeUl)

const savedToDos = localStorage.getItem("todos");
const parsedToDos = JSON.parse(savedToDos)
console.log(parsedToDos)
