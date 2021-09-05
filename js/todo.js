const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input:first-child");
const todoBtn = todoForm.querySelector("input:last-child");
const todoList = document.querySelector("#todo-list");

let todos = []; //할 일 목록을 담는 배열

const TODOS = "todos";

function saveTodos() {
    localStorage.setItem(TODOS, JSON.stringify(todos)); //JSON.stringify를 써서 배열을 string형으로 localStorage에 저장한다.
}

function deleteTodo(event) { //클릭된 할 일 목록 제거
    const li = event.target.parentElement; //클릭된 버튼의 부모 태그 찾음
    li.remove(); //부모태그 제거
    //filter을 이용해서 삭제가 된 부모 태그의 id와 todos의 배열 요소의 id가 같은 것을 제외, 태그의 id는 string형 이므로 parseInt로 형변환
    todos = todos.filter(item => item.id !== parseInt(li.id));
    saveTodos(); //바뀐 todos 배열을 localStorage에 저장
}

function drawTodo(newTodo) { //할 일 목록을 화면에 나타내주는 함수
    const li = document.createElement("li"); //js에서 createElement를 이용해 li 태그 생성
    li.id = newTodo.id; //li 태그의 id로 newTodo의 id 속성 할당
    li.classList.add("todoliStyle");
    const span = document.createElement("span"); //span 태그 생성
    span.innerText = newTodo.name; //span 태그의 내용으로는 newTodo의 name 속성 할당
    span.classList.add("todoSpanStyle");
    const btn = document.createElement("button"); //button 태그 생성
    btn.innerText = "X";
    btn.addEventListener("click", deleteTodo);
    btn.classList.add("todoDeleteStyle");
    li.appendChild(span); //li의 자식 태그로 span 추가(element를 생성을 하더라고 appendChild를 해주지 않으면 화면에 안나타남.)
    li.appendChild(btn); //li의 자식 태그로 btn 추가
    todoList.appendChild(li); //todoList의 자식 태그로 li 추가
}

function todoSubmit(event) { //todoForm을 제출했을 경우의 이벤트
    event.preventDefault(); //submit의 기본 동작을 막아준다.
    const newTodo = { //새로 추가할 할 일을 id, name 속성을 가진 객체로 만들어서 id를 이용해 삭제하기 용이하게 함.
        id:Date.now(),
        name:todoInput.value
    }
    todos.push(newTodo); //todos 배열에 새로운 할 일(newTodo) 추가
    saveTodos(); //localStorage에 todos배열 저장
    todoInput.value = "";
    drawTodo(newTodo); //drawTodo함수를 호출하면서 인자로 TODO_INPUT(사용자가 작성한 할 일)을 넣어준다.
}

//localStorage에서 string으로 저장되어 있는 배열을 불러올 때는 parse를 써서 배열 형태로 불러온다.
const getTodos = JSON.parse(localStorage.getItem(TODOS));

if(getTodos) { //localStorage에 todos배열에 대한 내용이 있을 경우
    todos = getTodos;
    todos.forEach(item => drawTodo(item)); //배열의 각 요소(할 일 내용)마다 drawTodo함수를 실행시킨다.
}

todoForm.addEventListener("submit", todoSubmit);