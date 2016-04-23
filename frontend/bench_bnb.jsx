var React = require('react'),
    ReactDOM = require('react-dom');

var Router = require('react-router').Router,
    Route = require('react-router').Route,
    IndexRoute = require('react-router').IndexRoute,
    hashHistory = require('react-router').hashHistory;

var Search = require('./components/search');

var routes = (
  <Route path='/' component={Search}></Route>
);

document.addEventListener("DOMContentLoaded", function () {

  ReactDOM.render(
    <Router history={hashHistory}>{routes}</Router>,
    document.getElementById('root')
  );
});
