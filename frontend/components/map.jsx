var React = require('react'),
    BenchStore = require('../stores/bench_store'),
    ClientActions = require('../actions/client_actions'),
    MapUtil = require('../util/map_util'),
    MarkerStore = require('../stores/marker_store');

/* global google */

module.exports = React.createClass({
  onChange: function(){
    var self = this;
    setTimeout(function(){
      self.setMarkers();
    },0);
  },

  setMarkers: function() {
    var self = this;
    var markers = {};
    var benches = BenchStore.all();

    Object.keys(benches).forEach(function(key) {
      var mark = MapUtil.addMarker(self.map, benches[key]);
      markers[benches[key]['id']] = mark;
    });

    MarkerStore.resetMarkers(markers);
  },

  getBenches: function() {
    var currLoc = this.map.getBounds();
    var northEast = {
      lat: currLoc.getNorthEast().lat(),
      lng: currLoc.getNorthEast().lng()
    };

    var southWest = {
      lat: currLoc.getSouthWest().lat(),
      lng: currLoc.getSouthWest().lng()
    };

    var bounds = {bounds: {
      northEast: northEast,
      southWest: southWest
    }};

    ClientActions.fetchBenches(bounds);
  },

  componentDidMount: function(){
    var mapDOMNode = this.refs.map;
    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    BenchStore.addListener(this.onChange);
    this.map.addListener('idle',this.getBenches);
  },

  render: function () {
   return (
       <div id="map" ref='map'/>
   );
 }
});
