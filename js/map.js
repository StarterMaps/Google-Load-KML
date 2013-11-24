/*********************************/
/**** Basic Map Functionality ****/
var map;
function initialize() {
  var mapOptions = {
    zoom: 12,
    center: new google.maps.LatLng(39.283825, -76.611207),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoomControlOptions: {style:google.maps.ZoomControlStyle.SMALL}
  };
  map = new google.maps.Map(document.getElementById('map'),
      mapOptions);

  // Add a KML layer to the map
  var kmlCrimeCameras = new google.maps.KmlLayer({
    url: "https://data.baltimorecity.gov/api/geospatial/nxbm-dfav?method=export&format=KML"
  });
  kmlCrimeCameras.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);