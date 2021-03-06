var pulse_data = {
};

pulse_data[1] = [{
    period: '2016-12-04T09:30:00',
    pulse: 126.66,
    lowerbound: 40,
    upperbound: 180,
}, {
    period: '2016-12-04T09:31:00',
    pulse: 127.78,
    lowerbound: 40,
    upperbound: 180,
}, {
    period: '2016-12-04T09:32:00',
    pulse: 49.12,
    lowerbound: 40,
    upperbound: 180,
}, {
    period: '2016-12-04T09:33:00',
    pulse: 137.67,
    lowerbound: 40,
    upperbound: 180,
}, {
    period: '2016-12-04T09:34:00',
    pulse: 68.10,
    lowerbound: 40,
    upperbound: 180,
}, {
    period: '2016-12-04T09:35:00',
    pulse: 56.70,
    lowerbound: 40,
    upperbound: 180,
}, {
    period: '2016-12-04T09:36:00',
    pulse: 48.20,
    lowerbound: 40,
    upperbound: 180,
}, {
    period: '2016-12-04T09:37:00',
    pulse: 150.73,
    lowerbound: 40,
    upperbound: 180,
}, {
    period: '2016-12-04T09:38:00',
    pulse: 106.87,
    lowerbound: 40,
    upperbound: 180,
}, {
    period: '2016-12-04T09:39:00',
    pulse: 84.32,
    lowerbound: 40,
    upperbound: 180,
}];

// $(function() {
//   selectData(1);
// });

for(var i = 2; i <=4; i++){
  pulse_data[i] = pulse_data[1].map(function(a){
    return {
      period: a.period,
      pulse: 100 + Math.random() * 20,
      lowerbound: a.lowerbound,
      upperbound: a.upperbound,
    };
  });
}

function selectData(id){
  id = id || 1;
  Morris.Line({
      element: 'morris-area-chart',
      data: pulse_data[id],
      xkey: 'period',
      ykeys: ['pulse', 'lowerbound', 'upperbound'],
      labels: ['Pulse', 'Lowerbound', 'Upperbound'],
      yLabelFormat: function(y) { return y + ' bpm' },
      lineColors: ['#0b62a4', '#edc240', '#cb4b4b'],
      pointSize: 2,
      hideHover: 'auto',
      resize: true
  });
}

$('#morris-area-chart').empty();
selectData(1);
