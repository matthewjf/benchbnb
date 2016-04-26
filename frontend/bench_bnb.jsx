var React = require('react'),
    ReactDOM = require('react-dom');

var Router = require('react-router').Router,
    Route = require('react-router').Route,
    IndexRoute = require('react-router').IndexRoute,
    hashHistory = require('react-router').hashHistory;

var Search = require('./components/search'),
    Header = require('./components/header'),
    BenchForm = require('./components/benches/bench_form');

var App = React.createClass({
  render: function(){
    return (
        <div>
          <header><Header /></header>
          {this.props.children}
        </div>
    );
  }
});

var Rtr = (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Search} />
      <Route path='benches/new' component={BenchForm} />
    </Route>
  </Router>
);

document.addEventListener("DOMContentLoaded", function () {
  var root = document.getElementById('root');
  ReactDOM.render(Rtr, root);
});
