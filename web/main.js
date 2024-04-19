    (function () {
    (".sidebar-link").click(function () {
     (".sidebar-link").removeClass("is-active");
     (this).addClass("is-active");
    });
   });

   
   
   (function () {
    (".logo, .logo-expand, .discover").on("click", function (e) {
     (".main-container").removeClass("show");
     (".main-container").scrollTop(0);
    });
    (".trending, .video").on("click", function (e) {
     (".main-container").addClass("show");
     (".main-container").scrollTop(0);
     (".sidebar-link").removeClass("is-active");
     (".trending").addClass("is-active");
    });
   });

   //--------------------------------------------------

   const labels = [
    'maandag',
    'dinsdag',
    'woensdag',
    'donderdag',
    'vrijdag',
    'zaterdag',
    'zondag'
];

const data = {
    labels: labels,
    datasets: [{
        label: 'Opbrengst in KwH',
        backgroundColor: ["blue"],
        data: [7, 6, 5, 4, 10, 6, 9]
    }]
};

const config = {
    type: 'bar',
    data: data,
    options: {}
};

const Chart1 = new Chart(document.getElementById("js--chartZon"), config);

//api zonopkomst
const zonsOpkomstApi = document.getElementById("js--zonsOpkomstapi");
const zonsOndergangApi = document.getElementById("js--zonsOnderGangapi");

fetch("https://api.sunrise-sunset.org/json?lat=52.37403&lng=4.88969&formatted=0")
    .then(response => response.json())
    .then(data => {
        const sunrise = new Date(data.results.sunrise);
        const sunset = new Date(data.results.sunset);

        zonsOpkomstApi.innerHTML = "Zonsopkomst in Amsterdam: " + sunrise.toLocaleTimeString();
        zonsOndergangApi.innerHTML = "Zonsondergang in Amsterdam: " + sunset.toLocaleTimeString();
    })
    
//----------

const apiURL = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m&hourly=temperature_2m&timezone=auto";

fetch(apiURL)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Display the current temperature
    const currentTemperature = data.current.temperature_2m;
    document.getElementById("currentTemperature").innerHTML = `Current Temperature: ${currentTemperature}°C`;

    // Display hourly temperatures
    const hourlyTemperatures = data.hourly.temperature_2m;
    const hourlyTemperaturesDiv = document.getElementById("hourlyTemperatures");
    hourlyTemperaturesDiv.innerHTML = "<h2>Hourly Temperatures:</h2>";
    hourlyTemperatures.forEach((temperature, hour) => {
      const temperatureDiv = document.createElement("div");
      temperatureDiv.textContent = `Hour ${hour}: ${temperature}°C`;
      hourlyTemperaturesDiv.appendChild(temperatureDiv);
    });
  })
  .catch(error => {
    console.error(`Error fetching data: ${error.message}`);
  });