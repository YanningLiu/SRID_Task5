var data = [
  { id: 1, name: 'Chi-I', lat: 37.408, lng: -122.06, tel: '650-761-2444' },
  { id: 2, name: 'Gaurav', lat: 37.400, lng: -122.08, tel: '650-761-2444' },
  { id: 3, name: 'Harpreet', lat: 37.395, lng: -122.06, tel: '650-761-2444' },
  { id: 4, name: 'Yanning', lat: 37.405, lng: -122.08, tel: '650-761-2444' },
];

var dict = {};

function createMarker(map, id, name, lat, lng, tel){
  var contentString = '<div id="content">'+
      '<div id="bodyContent">'+
      '<p><b>' + name + '</b></p>'+
      '<p><b><i class="fa fa-heartbeat fa-fw"></i></b><a href="/chii#' + id + '">' + name + '\'s health status</a></p>' +
      '<p><b><i class="fa fa-phone fa-fw"></i></b><a href="tel:' + tel + '">' + tel + '</a></p>' +
      '<p><b><i class="fa fa-map-marker fa-fw"></i></b><a href="https://maps.google.com?saddr=Current+Location&daddr=' + lat + ',' + lng + '">Direction</p>' +
      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
  var marker = new google.maps.Marker({
    position: {lat: lat, lng: lng},
    title: name,
    map: map, 
  });
  marker.addListener('click', function() {
    Object.keys(dict).forEach(function(key){
      console.log(key);
      dict[key].infowindow.close();
    });
    infowindow.open(map, marker);
  });

  dict[id] = dict[id] || {};
  dict[id].marker = marker;
  dict[id].infowindow = infowindow;
  return marker;
}

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: {lat: 37.402, lng: -122.07}
  });
  data.forEach(function(d){
    createMarker(map, d.id, d.name, d.lat, d.lng, d.tel);
  });
}

(function(){
  var ctrl = function(){
    var userId = location.hash.slice(1);
    if (!userId) return;
    google.maps.event.trigger(dict[userId].marker, 'click');
  };
  $(window).on('hashchange', ctrl);
  $(window).on('load', ctrl);
})();
