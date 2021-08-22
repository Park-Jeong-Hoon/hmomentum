const loginInput = document.querySelector("#login input:first-child");
const loginSubmit = document.querySelector("#login input:last-child");
const loginForm = document.querySelector("#login");
const username = document.querySelector("#username");

const USER_NAME = localStorage.getItem("username");

function drawName(name) {
    loginForm.classList.add("hide");
    username.classList.remove("hide");
    username.innerText = name;
}

if(USER_NAME === null) {
    loginForm.classList.remove("hide");
} else {
    drawName(USER_NAME);
}

function submitEvent(event) {
    event.preventDefault();
    const loginName = loginInput.value;
    localStorage.setItem("username", loginName);
    drawName(loginName);
}

loginForm.addEventListener("submit", submitEvent);

loginForm.classList.add("loginFormStyle");
loginInput.classList.add("loginInputStyle");
loginSubmit.classList.add("loginSubmitStyle");
username.classList.add("userStyle");