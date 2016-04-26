var ServerActions = require('../actions/server_actions'),
    FormData = require('form-data');


var ApiUtil = {
  fetchBenches: function(bounds){
    $.ajax({
      url: "api/benches",
      data: bounds,
      success: function (benches) {
        ServerActions.receiveAll(benches);
      }
    });
  },
  createBench: function(bench){
    $.ajax({
      url: 'api/benches',
      method: "POST",
      data: {bench: bench},
      success: function(newBench){
        alert('bench created');
      }
    });
  }
};

module.exports = ApiUtil;
