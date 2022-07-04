//dom elements
const container = document.createElement("div");
const countriesRow = document.createElement("div");
const h1 = document.createElement("h1");

//container attributes
container.setAttribute("class", "container");
container.setAttribute("id", "container");

//heading attributes and inner text
h1.setAttribute("id", "title");
h1.setAttribute("class", "text-center");
h1.innerText = "Countries with Weather";

//card row div element
countriesRow.setAttribute("class", "row");

//fetching data form restcountries api and displaying it in DOM
async function countryAndWeather() {
  countriesRow.innerHTML = "<h4>Please wait...</h4>";
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    countriesRow.innerHTML = "";

    for (let i = 0; i < data.length; i++) {
      countriesRow.innerHTML += `
      <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4 bg-light g-5">
      <div class="card h-100 w-auto" style="width: 18rem;" id="card">
        <div class="card-header text-center" id="country-name">${data[i].name.common}</div>
          <img src="${data[i].flags.svg}" class="card-img-top" alt='country-cards'>
          <div class="card-body">
          <div class="card-text"><b>Region : </b>${data[i].region}</div>
          <div class="card-text"><b>Country-code : </b>${data[i].altSpellings[0]}</div>
          <div class="card-text"><b>Capital : </b>${data[i].capital}</div>
          <div class="card-text"><b>Population : </b>${data[i].population}</div>
          <div id="${data[i].name.common}"></div>
        </div>
            <div class="card-footer d-flex justify-content-center">
              <button class="btn btn-primary" onClick="getWeather(${data[i].latlng[0]},${data[i].latlng[1]},'${data[i].name.common}')">click for weather</button>
            </div>
        </div>
      </div>`;
    }
  } catch (error) {
    console.log(error);
  }
}

//fetching data from weather api and showing weather
async function getWeather(lat, lon, id) {
  const weatherData = document.getElementById(id);
  weatherData.innerHTML = `<h4>Loading weather...</h4>`;

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ff7e49eb4fd19463836219b0feb2529f&units=metric`
    );
    const wData = await res.json();

    weatherData.innerHTML = `
    <div class="card-text"><b>Weather : </b>${wData.weather[0].main}</div>
    <div class="card-text"><b>Temperature : </b>${wData.main.temp} &#8451;</div>
    <img src=" http://openweathermap.org/img/wn/${wData.weather[0].icon}@2x.png">
  `;
  } catch (error) {
    console.log(error);
  }
}

//appending all created elements
document.body.appendChild(container);
container.append(h1, countriesRow);

//calling the country api function to display all the cards
setTimeout(countryAndWeather, 1000);