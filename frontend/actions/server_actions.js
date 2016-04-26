var Dispatcher = require('../dispatcher/dispatcher');
var BenchConstants = require('../constants/bench_constants');

var ServerActions = {
  receiveAll: function(benches){
    Dispatcher.dispatch({
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
    });
  },
  receiveSingleBench: function(bench){
    Dispatcher.dispatch({
      actionType: BenchConstants.CREATE_BENCH,
      bench: bench
    });
  }
};

module.exports = ServerActions;
