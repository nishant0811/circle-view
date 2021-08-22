function chart1() {
  let ctx = document.getElementById('chart1').getContext("2d");
  let data = [3000, null, 4000, null, 12500, null, 13000, null, 7500, null, null, 8000];
  let max = Math.max(...data);
  let myChart = new Chart(ctx, {
    type: "line",
    data: {
      label: "",
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [{
        data: data,
        fill: false,
        spanGaps: true,
        tension: 0.1,
        borderColor: "rgb(103,170,161)"
      }]
    },
    options: {
      responsive: true,
      aspectRatio: 1.5,
      scales: {
        yAxis: {
          grid: {
            display: false
          },
          title:{
            display : true,
            align : 'center',
            text : 'Cost in USD (upto 1 million)',
            font : {
              family : 'Poppins',
              size : 12,
              color : "#858588",
            },
            padding : {
              bottom : 10
            }
          },
          min : 0,
          suggestedMax : max+100,
        }
      },
      plugins: {
        legend: {
          display: false
        }
      },
      layout : {
        padding : {
          left : 16,
          right : 32,
          top : 24,
          bottom : 24
        }
      }
    },
    plugins :[{
      id: 'chart1',
      beforeDraw: (chart) => {
    const ctx = chart.canvas.getContext('2d');
    ctx.save();
    ctx.globalCompositeOperation = 'destination-over';
    ctx.fillStyle = '#F2F3F7';
    ctx.fillRect(0, 0, chart.width, chart.height);
    ctx.restore();
  }
    }]
  })
}

function chart2(){
  let ctx = document.getElementById('chart2').getContext("2d");
  var bar_ctx = document.getElementById('chart2').getContext('2d');

var background_1 = bar_ctx.createLinearGradient(0, 0, 0, 400);
background_1.addColorStop(0, '#ff6597');
background_1.addColorStop(1, '#ffc446');

  let data = [16,11,22,11,16,14,22];
  let max = Math.max(...data);
  let myChart = new Chart(ctx, {
    type: "bar",
    data: {
      label: "",
      labels: ["Plan","Do" , "KPI" ,"Team" , "Meet" , "Docs" , "Tutorials"],
      datasets: [{
        data: data,
        fill: false,
        spanGaps: true,
        tension: 0.1,
        backgroundColor: background_1
      }]
    },
    options: {
      responsive: true,
      aspectRatio: 1.5,
      scales: {
        yAxis: {
          grid: {
            display: false
          },
          title:{
            display : true,
            align : 'center',
            text : 'Hours Per Day',
            font : {
              family : 'Poppins',
              size : 12,
              color : "#858588",
            },
            padding : {
              bottom : 10
            }
          },
          min : 0,
          suggestedMax : max+5,
        }
      },
      plugins: {
        legend: {
          display: false
        }
      },
      layout : {
        padding : {
          left : 16,
          right : 32,
          top : 24,
          bottom : 24
        }
      }
    },
    plugins :[{
      id: 'chart1',
      beforeDraw: (chart) => {
    const ctx = chart.canvas.getContext('2d');
    ctx.save();
    ctx.globalCompositeOperation = 'destination-over';
    ctx.fillStyle = '#F2F3F7';
    ctx.fillRect(0, 0, chart.width, chart.height);
    ctx.restore();
  }
    }]
  })
}

function chart3(){
  let ctx = document.getElementById('chart3').getContext("2d");
  let data = [10,16,15,12,16,8,2];
  let max = Math.max(...data);
  let myChart = new Chart(ctx, {
    type: "line",
    data: {
      label: "",
      labels: [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat","Sun" ],
      datasets: [{
        data: data,
        fill: false,
        spanGaps: true,
        tension: 0.1,
        borderColor : '#E9A4A8'
      }]
    },
    options: {
      aspectRatio: 1.5,
      scales: {
        yAxis: {
          grid: {
            display: false
          },
          title:{
            display : true,
            align : 'center',
            text : 'Hours Per Day',
            font : {
              family : 'Poppins',
              size : 12,
              color : "#858588",
            },
            padding : {
              bottom : 10
            }
          },
          min : 0,
          suggestedMax : max+5,
        }
      },
      plugins: {
        legend: {
          display: false
        }
      },
      layout : {
        padding : {
          left : 16,
          right : 32,
          top : 24,
          bottom : 24
        }
      }
    },
    plugins :[{
      id: 'chart3',
      beforeDraw: (chart) => {
    const ctx = chart.canvas.getContext('2d');
    ctx.save();
    ctx.globalCompositeOperation = 'destination-over';
    ctx.fillStyle = '#F2F3F7';
    ctx.fillRect(0, 0, chart.width, chart.height);
    ctx.restore();
  }
    }]
  })
}

function chart4(){
  let ctx = document.getElementById('chart4').getContext("2d");
  var bar_ctx = document.getElementById('chart4').getContext('2d');

var background_1 = bar_ctx.createLinearGradient(0, 0, 0, 400);
background_1.addColorStop(0, '#5074db');
background_1.addColorStop(1, '#24bbd1');

  let data = [800,800,800,800,800,800,800,800,800,800,800,800];
  let max = Math.max(...data);
  let myChart = new Chart(ctx, {
    type: "bar",
    data: {
      label: "",
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [{
        data: data,
        fill: false,
        spanGaps: true,
        tension: 0.1,
        backgroundColor: background_1
      }]
    },
    options: {
      aspectRatio: 1.5,
      scales: {
        yAxis: {
          grid: {
            display: false
          },
          title:{
            display : true,
            align : 'center',
            text : '# Completed (Up to 10,000)',
            font : {
              family : 'Poppins',
              size : 12,
              color : "#858588",
            },
            padding : {
              bottom : 10
            }
          },
          min : 0,
          suggestedMax : max+5,
        }
      },
      plugins: {
        legend: {
          display: false
        }
      },
      layout : {
        padding : {
          left : 16,
          right : 32,
          top : 24,
          bottom : 24
        }
      }
    },
    plugins :[{
      id: 'chart4',
      beforeDraw: (chart) => {
    const ctx = chart.canvas.getContext('2d');
    ctx.save();
    ctx.globalCompositeOperation = 'destination-over';
    ctx.fillStyle = '#F2F3F7';
    ctx.fillRect(0, 0, chart.width, chart.height);
    ctx.restore();
  }
    }]
  })
}

function chart5(){
  let ctx = document.getElementById('chart5').getContext("2d");
  var bar_ctx = document.getElementById('chart5').getContext('2d');

var background_1 = bar_ctx.createLinearGradient(0, 0, 0, 400);
background_1.addColorStop(0, '#6EE084');
background_1.addColorStop(1, '#47C4BD');

 let background_2 = bar_ctx.createLinearGradient(0,0,0,400);
 background_2.addColorStop(0, '#ED87B6');
 background_2.addColorStop(1, '#6A4EBD');


  let data = [100,160,150,120,160,80,20];
  let max = Math.max(...data);
  let myChart = new Chart(ctx, {
    type: "bar",
    data: {
      label: "",
      labels: [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat","Sun" ],
      datasets: [{
        data: data,
        backgroundColor : background_1
      },{
        data : [80 , 130 , 50, 130 , 120 , 40 , 10] ,
        backgroundColor : background_2
      }
    ]
    },
    options: {
      aspectRatio: 1.5,
      scales: {
        yAxis: {
          grid: {
            display: false
          },
          title:{
            display : true,
            align : 'center',
            text : 'Numbers Per Day',
            font : {
              family : 'Poppins',
              size : 12,
              color : "#858588",
            },
            padding : {
              bottom : 10
            }
          },
          min : 0,
          suggestedMax : max+5,
        },
        xAxis :{
          title : {
            display : true,
            align : 'center',
            text : 'Messages and Metings',
            font : {
              family : 'Poppins',
              size : 12,
              color : "#858588",
              weight : 600
            },
            padding : {
              bottom : 10
            }
          }
        }
      },
      plugins: {
        legend: {
          display: false
        }
      },
      layout : {
        padding : {
          left : 16,
          right : 32,
          top : 24,
          bottom : 24
        }
      }
    },
    plugins :[{
      id: 'chart5',
      beforeDraw: (chart) => {
    const ctx = chart.canvas.getContext('2d');
    ctx.save();
    ctx.globalCompositeOperation = 'destination-over';
    ctx.fillStyle = '#F2F3F7';
    ctx.fillRect(0, 0, chart.width, chart.height);
    ctx.restore();
  }
    }]
  })
}

function chart6(){
  let ctx = document.getElementById('chart6').getContext("2d");
  var bar_ctx = document.getElementById('chart6').getContext('2d');

var background_1 = bar_ctx.createLinearGradient(0, 0, 0, 400);
background_1.addColorStop(0, '#FBB668');
background_1.addColorStop(1, '#EF64C8');

 let background_2 = bar_ctx.createLinearGradient(0,0,0,600);
 background_2.addColorStop(0, '#EEE673');
 background_2.addColorStop(1, '#34B3B6');


  let data = [100,160,150,120,160,80,20];
  let max = Math.max(...data);
  let myChart = new Chart(ctx, {
    type: "bar",
    data: {
      label: "",
      labels: [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat","Sun" ],
      datasets: [{
        data: data,
        backgroundColor : background_1
      },{
        data : [80 , 130 , 50, 130 , 120 , 40 , 10] ,
        backgroundColor : background_2
      }
    ]
    },
    options: {
      aspectRatio: 1.5,
      scales: {
        yAxis: {
          grid: {
            display: false
          },
          title:{
            display : true,
            align : 'center',
            text : 'Hours Per Day',
            font : {
              family : 'Poppins',
              size : 12,
              color : "#858588",
            },
            padding : {
              bottom : 10
            }
          },
          min : 0,
          suggestedMax : max+5,
        },
        xAxis :{
          title : {
            display : true,
            align : 'center',
            text : 'Your Companies Vs Similar Companies',
            font : {
              family : 'Poppins',
              size : 12,
              color : "#858588",
              weight : 600
            },
            padding : {
              bottom : 10
            }
          }
        }
      },
      plugins: {
        legend: {
          display: false
        }
      },
      layout : {
        padding : {
          left : 16,
          right : 32,
          top : 24,
          bottom : 24
        }
      }
    },
    plugins :[{
      id: 'chart6',
      beforeDraw: (chart) => {
    const ctx = chart.canvas.getContext('2d');
    ctx.save();
    ctx.globalCompositeOperation = 'destination-over';
    ctx.fillStyle = '#F2F3F7';
    ctx.fillRect(0, 0, chart.width, chart.height);
    ctx.restore();
  }
    }]
  })
}

chart1();
chart2();
chart3();
chart4();
chart5();
chart6();
