function searchWeather() {

    const city = document.getElementById("cityInput").value;

    if(city === "") {
        alert("Please enter a city name");
        return;
    }

    document.getElementById("cityName").innerText = city;

    document.getElementById("temperature").innerText =
    "Temperature data will appear here";

    document.getElementById("condition").innerText =
    "Weather condition will appear here";

}
