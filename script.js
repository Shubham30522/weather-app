var API_KEY = "d0c30a6d48764406f64226a3563f83bd";

async function showWeather() {
  let lat = "21.170240";
  let lon = "72.831062";

  let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
  let data = await response.json();
  let newPara = document.createElement('p');
  newPara.textContent = `${(data?.main?.temp.toFixed(2))} C`
  document.body.appendChild(newPara);

}
