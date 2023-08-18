const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");


let toDos = [];


function saveTodoList(){
    localStorage.setItem("userTodo", JSON.stringify(toDos));
}


function deletList(event){

    //console.dir(event.target);

    const li = event.target.parentElement;
    li.remove();

    //li에 있는 id 값은 string 임. >> parseInt 사용
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveTodoList();
}

function paintTodoWindow(newtodotext) {
    const list = document.createElement("li");
    list.id = newtodotext.id;
    list.classList.add("no_dot");
   
    const span = document.createElement("span");
    span.innerText = newtodotext.Text;
    span.classList.add("font");

    const button = document.createElement("button");
    button.classList.add("margin-left");
    button.innerText = "🚮";
    button.classList.add("background-button");

    button.addEventListener("click", deletList); //삭제하려고 보니 뭘 삭제해야 할지 모르겠다... 처음부터 오브젝트를 만들어서 작성하면 더 쉽지 않을까?
    list.appendChild(span);
    list.appendChild(button);
    todoList.appendChild(list);
}

function handleTodoList(event){

    event.preventDefault();

    const newTodo = todoInput.value;
    const newTodoOj = {
        Text: newTodo,
        id: Date.now(), //id 랜덤 생성
    }
    todoInput.value = "";
    toDos.push(newTodoOj);

  
    saveTodoList();
    paintTodoWindow(newTodoOj);


}


todoForm.addEventListener("submit", handleTodoList);

const savedTodo = localStorage.getItem("userTodo");

if(savedTodo !== null){
    const parseTodo = JSON.parse(savedTodo);
    toDos = parseTodo;

    parseTodo.forEach(paintTodoWindow);
}