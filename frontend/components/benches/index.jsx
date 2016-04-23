var React = require('react'),
    ApiUtil = require('../../util/api_util.js'),
    BenchStore = require('../../stores/bench_store'),
    IndexItem = require('./index_item');

module.exports = React.createClass({
  getInitialState: function() {
    return { benches: BenchStore.all() };
  },

  onChange: function() {
    this.setState({ benches: BenchStore.all() });
  },

  componentDidMount: function () {
    BenchStore.addListener(this.onChange);
  },

  render: function() {
    var links = Object.keys(this.state.benches).map(function(id) {
      return <IndexItem
        bench={this.state.benches[id]}
        key ={this.state.benches[id].title}
      />;
    }.bind(this));

    return <div id='sidebar'>
      <div className='sidebar-content'>
        <ul className='sidebar-list'>{links}</ul>
      </div>
    </div>;
  }

});
