$(document).ready(function () {

  // Show the first tab and hide the rest
  console.log($("#tabs-nav li:first-child").addClass("active"));
  $("#tabs-nav li:first-child").addClass("active");
  $(".tab-content").hide();
  $(".tab-content:first").show();

  // Click function
  $("#tabs-nav li").click(function () {
    $("#tabs-nav li").removeClass("active");
    $(this).addClass("active");
    $(".tab-content").hide();
    console.log(this);
    var activeTab = $(this).find("a").attr("href");
    // console.log(activeTab)
    $(activeTab).fadeIn();
    return false;
  });




  const datapoints = [0, 20, 20, 60, 50, 30];
  const dashboardChart = document.getElementById("dashboard-chart");

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Cubic interpolation (monotone)",
        data: datapoints,
        borderColor: "#2563EB",
        fill: false,
        cubicInterpolationMode: "monotone",
        tension: 0.4,
        pointRadius: 4,
        pointHoverRadius: 10,
        pointHoverBackgroundColor: "#007AFF",
        pointHoverBorderColor: "white",
        pointHoverBorderWidth: 4,
      },
    ],
  };

  const tooltipLine = {
    id: "tooltipLine",
    beforeDraw: (chart) => {
      if (chart.tooltip._active && chart.tooltip._active.length) {
        // console.log(chart)
        const ctx = chart.ctx;
        // // ctx.save();
        const activePoint = chart.tooltip._active[0];
        // // console.log(activePoint)
        ctx.beginPath();
        // ctx.setLineDash([5,7]);
        ctx.moveTo(activePoint.element.x, activePoint.element.y);
        ctx.lineTo(activePoint.element.x, chart.chartArea.bottom);
        ctx.lineWidth = 2;
        ctx.strokeStyle = "#CBD5E1";
        ctx.stroke();
        ctx.restore();
      }
    },
  };

  new Chart(dashboardChart, {
    type: "line",
    data: data,
    options: {
      responsive: true,
      scaleLineColor: "rgba(0,0,0,0)",
      scales: {
        x: {
          type: "category",
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          display: true,
          title: {
            display: true,
          },
          grid: {
            display: false,
          },
        },
        y: {
          // beginAtZero: false,
          display: true,
          suggestedMin: "-10k",
          suggestedMax: "200k",
        },
      },
      plugins: {
        legend: {
          display: false, //This will do the task
        },
      },
    },
    plugins: [tooltipLine],
  });



  const datapoints2 = [0, 20, 20, 60, 50, 30];
  const dashboardChart2 = document.getElementById("dashboard-chart2");

  const data2 = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Cubic interpolation (monotone)",
        data: datapoints2,
        borderColor: "#2563EB",
        fill: false,
        cubicInterpolationMode: "monotone",
        tension: 0.4,
        pointRadius: 4,
        pointHoverRadius: 10,
        pointHoverBackgroundColor: "#007AFF",
        pointHoverBorderColor: "white",
        pointHoverBorderWidth: 4,
      },
    ],
  };

  const tooltipLine2 = {
    id: "tooltipLine2",
    beforeDraw: (chart) => {
      if (chart.tooltip._active && chart.tooltip._active.length) {
        // console.log(chart)
        const ctx = chart.ctx;
        // // ctx.save();
        const activePoint = chart.tooltip._active[0];
        // // console.log(activePoint)
        ctx.beginPath();
        // ctx.setLineDash([5,7]);
        ctx.moveTo(activePoint.element.x, activePoint.element.y);
        ctx.lineTo(activePoint.element.x, chart.chartArea.bottom);
        ctx.lineWidth = 2;
        ctx.strokeStyle = "#CBD5E1";
        ctx.stroke();
        ctx.restore();
      }
    },
  };

  new Chart(dashboardChart2, {
    type: "line",
    data: data2,
    options: {
      responsive: true,
      scaleLineColor: "rgba(0,0,0,0)",
      scales: {
        x: {
          type: "category",
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          display: true,
          title: {
            display: true,
          },
          grid: {
            display: false,
          },
        },
        y: {
          // beginAtZero: false,
          display: true,
          suggestedMin: "-10k",
          suggestedMax: "200k",
        },
      },
      plugins: {
        legend: {
          display: false, //This will do the task
        },
      },
    },
    plugins: [tooltipLine2],
  });


  // Bar Chart
  const topSellChart = document.getElementById("top-sell-chart");
  const topSellChartContext = topSellChart.getContext('2d');
  const gradientBg = topSellChartContext.createLinearGradient(0, 0, 0, 350)

  gradientBg.addColorStop(0, '#BAD8FF');
  gradientBg.addColorStop(1, 'rgba(219, 234, 254, 0.46)');
  // const barLabels = Utils.months({count: 7});
  const barData = {
    labels: ["S", "M", "T", "W", "T", "F"],
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: gradientBg,

      borderRadius: 8,
      hoverBackgroundColor: '#007AFF'
    }]
  };




  new Chart(topSellChart, {
    type: 'bar',
    data: barData,
    options: {
      scales: {
        y: {
          beginAtZero: true,

        },
        x: {
          grid: {
            display: false
          }
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    },
  })

});



