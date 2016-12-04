function createMarker(map, name, lat, lng, tel){
  var contentString = '<div id="content">'+
      '<div id="bodyContent">'+
      '<p><b>' + name + '</b></p>'+
      '<p><b><i class="fa fa-heartbeat fa-fw"></i></b><a href="/chii#' + name + '">' + name + '\'s health status</a></p>' +
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
    infowindow.open(map, marker);
  });
  return marker;
}

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: {lat: 37.402, lng: -122.07}
  });
  createMarker(map, 'Chi-I', 37.408, -122.06, '650-761-2444');
  createMarker(map, 'Gaurav', 37.400, -122.08, '650-761-2444');
  createMarker(map, 'Harpreet', 37.395, -122.06, '650-761-2444');
  createMarker(map, 'Yanning', 37.405, -122.08, '650-761-2444');
}