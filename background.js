const bgimg = document.createElement("img");
const body = document.querySelector("body");
const imgs = ["1.jpg", "2.jpg", "3.jpg"];

bgimg.src = `img/${imgs[Math.floor(Math.random()*imgs.length)]}`;

body.appendChild(bgimg);