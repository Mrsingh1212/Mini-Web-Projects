async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "Your Api Key"; // 🔑 Your real API key
  const resultDiv = document.getElementById("result");

  if (city === "") {
    resultDiv.innerHTML = "Please enter a city name.";
    return;
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );

    const data = await response.json();

    if (data.cod !== 200) {
      resultDiv.innerHTML = `⚠️ ${data.message}`;
      return;
    }

    const temp = data.main.temp;
    const weather = data.weather[0].description;
    const icon = data.weather[0].icon;

    resultDiv.innerHTML = `
      <h3>${data.name}, ${data.sys.country}</h3>
      <img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="icon">
      <p><strong>${temp}°C</strong></p>
      <p>${weather}</p>
    `;
  } catch (error) {
    resultDiv.innerHTML = "❌ Something went wrong. Try again.";
    console.error(error);
  }
}
