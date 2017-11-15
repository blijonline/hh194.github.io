var chartButtons = document.querySelector('.line-chart-buttons');
var trafficChart = document.querySelector('#lineChart');
var dailyTrafficChart = document.querySelector('#barChart');
var mobileUserChart = document.querySelector('#donutChart');
var hourly;
var daily;
var weekly;
var monthly;
var dailyTraffic;
var mobileUser;

hourly = {
  labels: ["1:00", "2:00", "3:00", "4:00", "5:00", "6:00", "7:00","8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00","20:00","21:00", "22:00", "23:00", "24:00"],
  datasets: [
    {
      fill: true,
      lineTension: 0.1,
      backgroundColor: "rgba(217, 20, 32, .6)",
      borderColor: "#FB6B72",
      pointBackgroundColor: "#D91420",
      pointRadius: 3,
      data: [1, 1, 1, 1, 1, 2, 5, 8, 12, 15, 18, 20, 23, 24, 21, 20, 18, 19, 24, 25, 25, 18, 15, 12, 7]
    }
  ]
};

daily = {
  labels: ["S", "M", "T", "W", "T", "F", "S"],
  datasets: [
    {
      fill: true,
      backgroundColor: "rgba(217, 20, 32, .6)",
      borderColor: "#FB6B72",
      pointBackgroundColor: "#D91420",
      pointRadius: 3,
      data: [32, 41, 39, 35, 27, 34, 30]
    }
  ]
};
weekly = {
  labels: ["W 37", "W 38", "W 39", "W 40", "W 41", "W 42", "W 43", "W 44", "W 45", "W 46", "W 47"],
  datasets: [
    {
      fill: true,
      lineTension: 0.1,
      backgroundColor: "rgba(217, 20, 32, .6)",
      borderColor: "#FB6B72",
      pointBackgroundColor: "#D91420",
      pointRadius: 3,
      data: [120, 125, 135, 122, 117, 135, 137, 120, 119, 125, 130]
    }
  ]
};
monthly = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "Juy", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      fill: true,
      backgroundColor: "rgba(217, 20, 32, .6)",
      borderColor: "#FB6B72",
      pointBackgroundColor: "#D91420",
      pointRadius: 3,
      data: [450, 432, 500, 493, 393, 421, 471, 501, 457, 412, 380, 401]
    }
  ]
};
dailyTraffic = {
  labels: ["S", "M", "T", "W", "T", "F", "S"],
  datasets: [
    {
      fill: true,
      backgroundColor: "#D91420",
      data: [85, 110, 100, 85, 84, 90, 100]
    }
  ]
};
mobileUser = {
  labels: ["Phones", "Tablets", "Desktop"],
  datasets: [
    {
      data: [20, 30, 50],
      backgroundColor: [
        "rgba(203, 134, 0, 0.6)",
        "rgba(166, 144, 181, 0.6)",
        "rgba(217, 20, 32, .6)"
      ],
      hoverBackgroundColor: [
        "#CB8600",
        "#A690B5",
        "#D91420"
      ],
      fill: true,
      pointBackgroundColor: "#fff",
      pointRadius: 3
    }
  ]
};

var chartOptions = {
  legend: {
            display: false
        }
};

var newChart = new Chart(trafficChart, {
  type: 'line', // set chart type
  data: daily, // set data type
  options: chartOptions // set chart options
});

var barChart = new Chart(dailyTrafficChart, {
  type: 'bar', // set chart type
  data: dailyTraffic, // set data type
  options: chartOptions // set chart options
});

var donutChart = new Chart(mobileUserChart, {
  type: 'doughnut', // set chart type
  data: mobileUser, // set data type
});

// change chart on button click

chartButtons.addEventListener('click', (e) => {
  newChart.destroy();
  const canvasContainer = trafficChart.parentElement;
  const canvas = canvasContainer.removeChild(trafficChart);
  canvasContainer.appendChild(canvas);
  var button = e.target;
  var dataType = eval(button.getAttribute('data-type'));
  newChart = new Chart(trafficChart, {
    type: 'line',
    data: dataType,
    options: chartOptions
  });
});
