var React = require('react'),
    Map = require('./map'),
    Index = require('./benches/index');

module.exports = React.createClass({
  render: function () {
   return (
     <div id='content'>
       <Index />
       <Map />
     </div>
   );
 }
});
