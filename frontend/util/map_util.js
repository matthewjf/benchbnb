/* global google */

module.exports = {
  createInfoWindow: function(marker, bench) {
    var self = this;
    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });

    var contentString = '<div id="marker-box">'+
      bench.name +
      '</div>';

    marker.addListener('click', function() {
      infowindow.open(self.map, this);
    });

    marker.addListener('mouseout', function() {
      infowindow.close();
    });
  },

  clearMarkers: function(markers){
    if (markers) {
      markers.forEach(function(mark){
        mark.setMap(null);
      });
    }
  },

  addMarker: function(map, bench) {
    var loc = new google.maps.LatLng(bench.lat, bench.lng);
    var desc = bench.description;

    var mark = new google.maps.Marker({
      position: loc,
      title: desc
    });

    mark.setMap(map);

    return mark;
  }
};
