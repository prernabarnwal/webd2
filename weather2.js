const api = {
  key: "fcc8de7015bbb202209bbf0261babf4c",
  base: "https://api.openweathermap.org/data/2.5/"
}
const search = document.querySelector('.search');
// let pic1 = document.querySelector(".pic1");
let wimg=document.querySelector(".img2");
const searchbtn = document.querySelector(".search-icon");

searchbtn.addEventListener("click", () => {
  checkWeather(search.value);
});
// search.addEventListener("keypress",checkWeather(search.value));
checkWeather();
async function checkWeather(query) {
  const p =await fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    if(p.status ==`404`){
      console.log("error!");
      document.querySelector(".error").style.display="inline";
      document.querySelector("main").style.display = "none";
    }
    else{
      var weather=await p.json();
      document.querySelector(".error").style.display = "none";
  let city = document.querySelector('.location .city');
  city.innerText = `${weather.name}, ${weather.sys.country}`;
  let now = new Date();
  let date = document.querySelector('.location .date');
  date.innerText = date1(now);
  let temp = document.querySelector('.current .temp');
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;
  let weather_el = document.querySelector('.current .weather');
  weather_el.innerText = weather.weather[0].main;
  let hilow = document.querySelector('.hi-low');
  hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;

  switch(weather.weather[0].main){
        case 'Clouds':
        wimg.src="clouds.webp";
        break;
        case 'Clear':
        wimg.src="clear.jpg";
        break;
        case 'Drizzle':
          wimg.src="drizzle.jpg";
          break;
        case 'Haze':
        wimg.src="haze.jpg";
        break;
        case 'Mist':
        wimg.src="mist.jpg";
        break;
        case 'Rain':
        wimg.src="rain.jpg";
        break;
        case 'Snow':
        wimg.src="snow.jpg";
        break;
  }
}
}

function date1(d) {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();
  return `${day} ${date} ${month} ${year}`;
}