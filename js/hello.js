const loginInput = document.querySelector("#login input:first-child");
const loginSubmit = document.querySelector("#login input:last-child");
const loginForm = document.querySelector("#login");
const username = document.querySelector("#username");

const USER_NAME = localStorage.getItem("username"); //로컬스토리지에 저장된 username 값

//로그인이 되었을 경우(로컬 스토리지에 username 값이 있는 경우) 발생하는 동작으로 로그인 폼은 가려주고 유저 이름을 드러냄
function drawName(name) {
    loginForm.classList.remove("loginFlex"); //폼의 모양을 위한 클래스 제거
    loginForm.classList.add("hide"); //hide(가려주는 클래스) 추가해서 폼을 가림
    username.classList.remove("hide"); //hide를 제거해서 이름을 나타냄
    username.innerText = `Be happy ${name}!!!`;
}

if(USER_NAME === null) { //로컬스토리지에 username값이 없으면
    loginForm.classList.remove("hide"); //폼을 가리는 클래스인 hide를 제거해서 폼이 나타나게 함
    loginForm.classList.add("loginFlex"); //폼의 모양을 위한 클래스 추가
} else { //값이 있으면
    drawName(USER_NAME); //drawName함수 호출
}

function submitEvent(event) { //로그인 하려고 submit 한 경우
    event.preventDefault(); //event의 기본 동작을 막아줌
    const loginName = loginInput.value; //input으로 들어온 값을
    localStorage.setItem("username", loginName); //로컬스토리지에 저장
    drawName(loginName); //drawName함수 호출
}

loginForm.addEventListener("submit", submitEvent);