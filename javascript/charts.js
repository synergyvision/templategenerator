
let charts = document.querySelectorAll('.chart');
for (let i=0;i<charts.length;i++){
     new Chart(charts[i].getContext('2d'), {
        type: type,
        data: {
            datasets: [{
                data: chartData,
                backgroundColor: chartColors
            }],
            label: '# of Votes',
            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: chartLabels
        },
        options: {
            legend: { display: false },
            title: {
                display: chartTitle.display,
                text: chartTitle.text
              }
          }
    });
}