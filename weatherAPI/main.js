async function start() {
  let location = document.getElementById("location").value;
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=5d7db96a6e1a27a1b587de63a9bdec1d`
  );
  const data = await response.json();
  console.log(data);
  const data2 = data.main;
  //   console.log(data2["temp"]);
  //   console.log(data2["temp_min"]);
  //   console.log(data2["temp_max"]);
  const data3 = data.weather[0].description;
  //   console.log(data3);
  // location = "";
  populateWeather(data2, data3);
  //   //   console.log(data2["Title"]);
  //   const pic = Object.values(data3)[0];
  //   console.log(Object.values(data3));
}
start();
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function populateWeather(data2, data3) {
  let location = document.getElementById("location").value;
  document.getElementById(
    "cityName"
  ).innerHTML = `City of ${capitalizeFirstLetter(location)}`;
  document.getElementById("location").value = "";
  document.getElementById(
    "cityTemp"
  ).innerHTML = `Temperature now: ${data2["temp"]}
  High: ${data2["temp_max"]}\n
  Low: ${data2["temp_min"]}`;
  document.getElementById(
    "cityConditions"
  ).innerHTML = `Current Weather Conditions: ${data3}`;
}
