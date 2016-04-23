var React = require('react'),
    ApiUtil = require('../../util/api_util.js'),
    BenchStore = require('../../stores/bench_store');

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
    var names = [];
    Object.keys(this.state.benches).forEach(function(id) {
      names.push(this.state.benches[id].description);
    }.bind(this));

    var links = names.map(function(name) {
      return <li className='card bench-item' key={name}>{name}</li>;
    });

    return <div id='sidebar'>
      <div className='sidebar-content'>
        <ul className='sidebar-list'>{links}</ul>
      </div>
    </div>;
  }

});
