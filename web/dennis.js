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
        backgroundColor: ["red", "green", "pink", "yellow", "black"],
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
    