var Store = require('flux/utils').Store,
    Dispatcher = require('../dispatcher/dispatcher'),
    BenchConstants = require('../constants/bench_constants');

var _benches = {};

var resetBenches = function(benches) {
  _benches = benches;
  return _benches;
};

var BenchStore = new Store(Dispatcher);

BenchStore.all = function () {
  return Object.assign({}, _benches);
};

BenchStore.findBench = function(id) {
  for (var prop in _benches) {
    if (_benches[prop]['id'] === parseInt(id)) {
      return _benches[prop];
    }
  }
};

BenchStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case BenchConstants.BENCHES_RECEIVED:
      var result = resetBenches(payload.benches);
        BenchStore.__emitChange();
        break;
    case BenchConstants.CREATE_BENCH:
        // add bench here
        BenchStore.__emitChange();
        break;
  }
};

module.exports = BenchStore;
