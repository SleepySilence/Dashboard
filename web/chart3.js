document.addEventListener('DOMContentLoaded', function () {
    const ctx3 = document.getElementById('myChart').getContext('2d');
    const myChart3 = new Chart(ctx3, {
        type: 'line',
        data: {
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
            datasets: [{
                label: 'Temperature (°C)',
                data: [10, 19, 24, 17, 16, 12, 15, 20, 21],
                borderColor: 'blue',
                fill: false
            }]
        },
        options: {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Day'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Temperature (°C)'
                    }
                }
            }
        }
    });
});