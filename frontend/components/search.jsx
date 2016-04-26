var React = require('react'),
    Map = require('./map'),
    Index = require('./benches/index'),
    hashHistory = require('react-router').hashHistory;

module.exports = React.createClass({
  addBenchClick: function() {
    hashHistory.push('/benches/new');
  },

  render: function () {
    return (
      <div id='content'>
        <Index />
        <Map />
        <div className='fixed-action-btn'>
          <a
            className="btn-floating btn-large waves-effect waves-light brown"
            onClick={this.addBenchClick}>
            <i className="material-icons">add</i>
            </a>
        </div>
      </div>
    );
 }
});
