Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';


//grafico de barras
let tituloBarras = [];
let puntajeBarras = [];

fetch("http://localhost:3000/Result")
        .then(response => response.json())
        .then(data => {
            
            for(let elemento of data){

                let nombre = elemento['title'];
                tituloBarras.push(nombre);
                let cantidad = elemento['running_time'];
                puntajeBarras.push(cantidad);               
            }            
       
          var grafica = document.getElementById("myBarChart");
          new Chart(grafica, {
          type: 'bar',
          data: {
            labels: tituloBarras,
            datasets: [{
              label: "Id",
              lineTension: 0.3,
              backgroundColor: "rgba(255, 195, 0)",
              borderColor: "rgba(2,117,216,1)",
              data: puntajeBarras,
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
                  max: 150,
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