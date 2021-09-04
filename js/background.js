const bgimg = document.createElement("img"); //js파일에서 html태그(img 태그) 생성
const body = document.querySelector("body");
const imgs = ["1.jpg", "2.jpg", "3.jpg"]; //배경으로 사용할 이미지 파일명 담는 배열

bgimg.src = `img/${imgs[Math.floor(Math.random()*imgs.length)]}`; //Math모듈의 random, floor 메소드를 이용해 랜덤으로 이미지 가져옴
bgimg.classList.add("imgStyle"); //imgStyle 클래스를 추가해서 배경 이미지의 스타일 설정

body.appendChild(bgimg); //js파일에서 생성한 태그 body에 추가