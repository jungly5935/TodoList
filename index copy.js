const submitForm = document.querySelector('.add');
const addButton = document.querySelector('.add-todo');
const todoList = document.querySelector('.todos');
const list = document.querySelectorAll('.todos li'); 

let listLength = list.length;

const generateTempalate = (todo) => {
  
  const html = `<li>
                  <input type="checkbox" id="todo_${listLength}">
                  <label for="todo_${listLength}">
                    <span class="check"></span>
                    ${todo}
                  </label>
                  <i class="fa fa-trash-o delete"></i>
                </li>`
  todoList.innerHTML += html;
};

function addTodos(e) {
  // e.preventDefault();
  const todo = submitForm.add.value.trim(); 
  // const toto = submitForm.addTodos.value;
  if (todo.length) { '공백 포함하지 않게 하려고 넣음'
    // listLength = listLength + 1;
    generateTempalate(todo);
    submitForm.reset();
  }
}

submitForm.addEventListener('submit', addTodos); //엔터 입력했을 때
addButton.addEventListener('click', addTodos);

function deleteTodos(e) {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
    // listLength = listLength - 1; //왜 안써도 잘되는거지??
  }
}

todoList.addEventListener('click', deleteTodos);