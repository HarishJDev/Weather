var button = document.querySelector('.button');
var input = document.querySelector('.inputValue');

let weather = {
  apiKey: "43c3e898859cb365131c639ad656bb54",
  fetchweather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&units=metric&appid="
        +this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name, icon, description, temp, humidity, speed);
    document.querySelector(".weather").classList.toggle("d-none");
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src ="https://openweathermap.org/img/wn/" + icon + "@2x.png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = Math.trunc(temp)  + "°C";
    document.querySelector(".humidity").innerText ="Humidity:" + humidity + "%";
    document.querySelector(".wind").innerText ="Wind Speed: " + speed + " km/hr";
    document.body.style.backgroundImage ="url('https://source.unsplash.com/1600x900/?" + name + "')";
  },
  search: function () {
    this.fetchweather(document.querySelector(".search-bar").value);
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

//Search while pressing enter
document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
    }
});
