const ctx2 = document.getElementById("myChart2");

let data2, config2;
data2 = {
    ctx2:data2 = {
        labels: ["ma", "di", "wo", "fr", "za"],
        datasets: [{
            label: "KwH",
            data: [100, 80, 40, 65, 30],
            backgroundColor: [
                "rgb(80,80,220)",
                "rgb(120,120,255)",
                "rgb(160,160,255)",
                "rgb(100,100,100)",
                "rgb(200,200,40)"
            ]
        }]
    }
}

config2 = {
    ctx2:{
        type: "bar",
        data: data2.ctx2,
        options: {
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    }
}
myChart = new Chart(ctx2, config2.ctx2);

//----------------weather-------------------

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

  //---------------
