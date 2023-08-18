//본인의 위치의 날씨를 알려주는 코드

const API_KEY = "48aba8e966d4d2a8e41b816849275f74";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in", lat, lon);
    //console.log(position); >> 이걸로 getCurrentPosition의 속성을 알 수 있음.
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    
    //url을 가져온 후에 작업에 관한 내용 wetube를 보면됨 
    //data.weather >> array임
    fetch(url).then(response => response.json()).then(data =>{
        //fetch로부터 가져온 url에 json 파일이 있다. 
        //이 json 파일을 이용해서 지역이름과 그 지역 날씨를 가져오기 위해서 다음과 같은 코드를 작성한다.
        //console.log(data.name, data.weather[0].main); >> 위를 확인하기 위한 코드
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        
        
        city.innerText = data.name;
        city.classList.add("font");
        weather.innerText = `🌨️ ${data.weather[0].main} 🌡️ ${data.main.temp}`; 
        weather.classList.add("font");
        
    });
}
function onGeoError() {
    alert("Can't find you. No weather for you.");
}



navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);


