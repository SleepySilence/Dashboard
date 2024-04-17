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