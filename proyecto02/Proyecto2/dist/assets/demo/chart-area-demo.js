/// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';


//grafico de lineas
let titulo = [];
let puntaje = [];

fetch("https://ghibliapi.herokuapp.com/films")
        .then(response => response.json())
        .then(data => {
            
            for(let elemento of data){

                let nombre = elemento['title'];
                titulo.push(nombre);
                let cantidad = elemento['rt_score'];
                puntaje.push(cantidad);               
            }            
       
          var grafica = document.getElementById("myAreaChart");
          new Chart(grafica, {
          type: 'line',
          data: {
            labels: titulo,
            datasets: [{
              label: "Id",
              lineTension: 0.3,
              backgroundColor: "rgba(209, 242, 235)",
              borderColor: "rgba(2,117,216,1)",
              data: puntaje,
            }],
          },
          options: {

         animation: {
            onComplete: () => {
              delayed = true;
            },
            delay: (context) => {
              let delay = 0;
              if (context.type === 'data' && context.mode === 'default' && !delayed) {
                delay = context.dataIndex * 300 + context.datasetIndex * 100;
              }
              return delay;
             },
    },
            scales: {
              xAxes: [{
                time: {
                  unit: 'date'
                },
                gridLines: {
                  display: false
                },
                ticks: {
                  maxTicksLimit: 20
                }
              }],
              yAxes: [{
                ticks: {
                  min: 0,
                  max: 100,
                  maxTicksLimit: 5
                },
                gridLines: {
                  color: "rgba(0, 0, 0, .125)",
                }
              }],
            },
            legend: {
              display: false
            }
          }
        });

        }).catch(console.error);