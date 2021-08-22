const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input:first-child");
const todoList = document.querySelector("#todo-list");

let todos = []; //할 일 목록을 담는 배열

function drawTodo(TODO_INPUT) { //할 일 목록을 화면에 나타내주는 함수
    const li = document.createElement("li"); //js에서 createElement를 이용해 li 태그 생성
    const h = document.createElement("h"); //h 태그 생성
    h.innerText = TODO_INPUT;
    const btn = document.createElement("button"); //button 태그 생성
    btn.innerText = "삭제";
    li.appendChild(h); //li의 자식 태그로 h 추가(element를 생성을 하더라고 appendChild를 해주지 않으면 화면에 안나타남.)
    li.appendChild(btn); //li의 자식 태그로 btn 추가
    todoList.appendChild(li); //todoList의 자식 태그로 li 추가
}

function todoSubmit(event) { //todoForm을 제출했을 경우의 이벤트
    event.preventDefault(); //submit의 기본 동작을 막아준다.
    const TODO_INPUT = todoInput.value;
    todos.push(TODO_INPUT);
    todoInput.value = "";
    localStorage.setItem("todos", JSON.stringify(todos)); //JSON.stringify를 써서 배열을 string형으로 localStorage에 저장한다.
    drawTodo(TODO_INPUT); //drawTodo함수를 호출하면서 인자로 TODO_INPUT(사용자가 작성한 할 일)을 넣어준다.
}

//localStorage에서 string으로 저장되어 있는 배열을 불러올 때는 parse를 써서 배열 형태로 불러온다.
const getTodos = JSON.parse(localStorage.getItem("todos"));

if(getTodos) { //localStorage에 todos배열에 대한 내용이 있을 경우
    todos = getTodos;
    todos.forEach(item => drawTodo(item)); //배열의 각 요소(할 일 내용)마다 drawTodo함수를 실행시킨다.
}

todoForm.addEventListener("submit", todoSubmit);