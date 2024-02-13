// const API_KEY = `67c2e5a83461896e20b9456d8acd4499`;

// // const URL = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API_KEY}"

// const form = document.querySelector("form");
// const search = document.querySelector("#search");
// const weather = document.querySelector("#weather");

// const getWeather = async (city , country) => {
//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
// // const secUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${country}&appid=${API_KEY}`
//   let response = await fetch(url);
//   let data = await response.json();
//   return showWeatherData(data);
// //   console.log(data)
// };

// const showWeatherData = (data) => {
//     console.log(data);
//   weather.innerHTML = ` <div>
//                                 <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
//                         </div>
//                             <div>
//                             <span>${data.weather[0].description}</span>
//                                 <h2>${data.main.temp}</h2>
//                             <h2>${data.weather[0].main}</h2>
//                             </div>`
// };

// form.addEventListener("submit", (evt) => {
//   getWeather(search.value);
//   evt.preventDefault();
// });


const API_KEY = `67c2e5a83461896e20b9456d8acd4499`;
const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector(".desc");

const getWeather = async (city, country) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  let response = await fetch(url);
  let data = await response.json();
  return showWeatherData(data);
};

const showWeatherData = (data) => {
  console.log(data);
  //   weather.innerHTML = ` <div>
  //                                 <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
  //                         </div>
  //                             <div>
  //                             <span>${data.weather[0].description}</span>
  //                                 <h2>${data.main.temp}</h2>
  //                             <h2>${data.weather[0].main}</h2>
  //                             </div>`

  weather.innerHTML = `<div class="desc">
<div class="img">
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
</div>
<div class="temp">
    <span>${data.weather[0].description}</span>
    <h1>${data.main.temp}</h1>
    <h2>${data.weather[0].main}</h2>
</div>
<div class="parent">
    <div class="wind">
        <div class="name">
            <span>Wind</span>
        </div>
        <div class="km">
            <p>${data.wind.speed} Km/h</p>
        </div>
    </div>
    <div class="visible">
        <h3>visibility</h3>
        <p>${data.visibility}</p>
    </div>
</div>`;
};

form.addEventListener("submit", (evt) => {
  getWeather(search.value);
  evt.preventDefault();
});

