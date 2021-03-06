var React = require('react'),
    MarkerStore = require('../../stores/marker_store');

/* global google */

module.exports = React.createClass({
  getInitialState: function() {
    return {isHovered: false};
  },

  onMouseEnter: function() {
    this.setState({isHovered: true});
    var marker = MarkerStore.all()[this.props.bench.id];
    if (marker)
      marker.setIcon('https://mts.googleapis.com/vt/icon/name=icons/spotlight/spotlight-waypoint-a.png');
    // marker.setAnimation(google.maps.Animation.BOUNCE);
  },

  onMouseLeave: function() {
    this.setState({isHovered: false});
    var marker = MarkerStore.all()[this.props.bench.id];
    if (marker)
      marker.setIcon('https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi.png');
    // marker.setAnimation(null);
  },

  render: function() {
    var hoverTransp = (this.state.isHovered ? 'hover z-depth-3' : '');
    var bench = this.props.bench;
    var seats = (bench.seating > 1 ? 'seats' : 'seat');
    var benchUrl = (bench.image_urls ? bench.image_urls[0] : '');

    return <li className='card bench-item'
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}>
      <div className='card-image'>
          <img src={benchUrl} />
      </div>
      <div className='card-content'>
        <span className='card-title activator grey-text text-darken-3'>
          {bench.title}
        </span>
        <div>
          <p className='description'>{bench.seating + ' ' + seats}</p>
          <p className='reviews'>
            <i className="tiny material-icons">star_rate</i>
            {' · 12 reviews'}
          </p>
        </div>
      </div>
      <div className={hoverTransp}></div>
    </li>;
  }
});
