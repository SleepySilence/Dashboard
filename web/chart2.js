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



  //---------------
