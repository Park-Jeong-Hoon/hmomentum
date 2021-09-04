const API_KEY = "670f08f3dfd08d5d713e92fb36c6c6c4";

function ok(position) {
    console.log(position);
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(res => res.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const area = document.querySelector("#weather span:last-child");
        weather.innerText = `날씨= ${data.weather[0].main}`;
        area.innerText = `현재위치= ${data.name}`;
    })
}

function no() {
    alert("위치를 확인할 수 없습니다.");
}

console.log(navigator.geolocation.getCurrentPosition(ok, no));