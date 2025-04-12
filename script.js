const apiKey = "29b1665041632ea7a9662cd3086f3c42";

function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const country = document.getElementById("countryInput").value.trim();

  if (!city || !country) {
    alert("Please enter both city and country code.");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("City or Country not found!");
      }
      return response.json();
    })
    .then(data => {
      const weather = data.weather[0].main;
      const emojiMap = {
        Clear: "☀️",
        Clouds: "☁️",
        Rain: "🌧️",
        Thunderstorm: "🌩️",
        Snow: "❄️",
        Mist: "🌫️",
        Haze: "🌫️",
        Fog: "🌫️"
      };

      document.getElementById("location").innerText = `${data.name}, ${data.sys.country}`;
      document.getElementById("temp").innerText = data.main.temp;
      document.getElementById("description").innerText = data.weather[0].description;
      document.getElementById("humidity").innerText = data.main.humidity;
      document.getElementById("wind").innerText = data.wind.speed;
      document.getElementById("emoji").innerText = emojiMap[weather] || "🌡️";
      document.getElementById("weatherResult").classList.remove("hidden");
    })
    .catch(error => {
      alert(error.message);
    });
}
