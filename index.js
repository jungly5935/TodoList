
// const submitForm = document.querySelector('.add');
// const addButton = document.querySelector('.add-todo');
const todolist = document.querySelector('.todos');
// const list = document.querySelectorAll('.todos li');
const submitForm = document.getElementById('add');
const addButton = document.getElementById('add-todo');
// const todolist = document.getElementsByClassName('todos');
const list = document.querySelectorAll('.todos li');
const allSelect = document.getElementById('select-all');
const del = document.getElementById('del');
const trash = document.querySelectorAll('.fa fa-trash-o delete')
const img_show = document.getElementById('show-image');

let listLength = list.length;

allSelect.addEventListener("click",(e)=>{
  let lists = document.querySelectorAll('.todo_check');
  if(checkAll === false)
  {
    checkAll = true;
    for(let i = 0 ; i<lists.length ; i++){
      lists[i].checked = true;
    }  
  }
  else{
    checkAll = false;
    for(let i = 0 ; i<lists.length ; i++){
      lists[i].checked = false;
    }
  }
  
})
del.addEventListener('click', (e)=> {
  let lists = document.querySelectorAll('.todo_check');
  for(let i=0;i<lists.length; i++ ){
    if(lists[i].checked === true){
      lists[i].parentNode.remove()
    }
  }
})

const generateTempalate = (todo) => {
  
  const html = `<li>
                  <input type="checkbox" class="todo_check" id="todo_${listLength}">
                  <label for="todo_${listLength}">
                    <span class="check"></span>
                    ${todo} 
                  </label>
                  <i class="fa fa-trash-o delete"></i>
                </li>`
  todolist.innerHTML += html;

  };
//..

console.log(todolist.length);
// console.log(todolist[0]);

function addTodos(e){
  const todo = submitForm.add.value;
  
  if(todo.length){
    listLength = listLength+1;
    generateTempalate(todo);
    submitForm.reset();
  }
}
submitForm.addEventListener('submit',addTodos);
addButton.addEventListener('click', addTodos);

function deleteTodos(e){
  if(e.target.classList.contains('delete')){
    console.log(e.target.parentNode);
    e.target.parentNode.remove();
  }
}
// 
todolist.addEventListener('click', deleteTodos);

let imgArray= new Array();
for(let i=1;i<=4;i++){
  imgArray[i] = "cat" + i + ".png";
}
function showImage(e){
  let imgNum = Math.round(Math.random()*3)+1;

  let objImg = document.getElementsByClassName("cover-img")[0];
  console.log(objImg);
  objImg.style.backgroundImage = 'url(' + imgArray[imgNum] + ')';  
  console.log(objImg);
}
showImage();