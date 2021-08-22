const time = document.querySelector("#time");

function nowTime() {
    const date = new Date(); //현재 시간에 대한 정보를 가져올 수 있다.
    /*padStart를 이용하면 padStart의 첫번째 인자 만큼 출력되게 하면서 
    만약 글자가 모자라면 padStart의 두번째 인자로 모자란 만큼의 앞부분을 채워준다.
    그런데 padStart는 string형 변수에만 사용가능해서 string형이 아닌 경우에는 형변환을 해주면 된다.*/
    const hours = String(date.getHours()).padStart(2, "0"); //시
    const minutes = String(date.getMinutes()).padStart(2, "0"); //분
    const seconds = String(date.getSeconds()).padStart(2, "0"); //초
    time.innerText = `${hours}:${minutes}:${seconds}`;
}

nowTime();
setInterval(nowTime, 1000); //1000밀리초의 간격을 두고 nowTime함수가 실행된다.

time.classList.add("timeStyle");