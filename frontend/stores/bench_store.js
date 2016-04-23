var Store = require('flux/utils').Store,
    Dispatcher = require('../dispatcher/dispatcher'),
    BenchConstants = require('../constants/bench_constants');

var _benches = {};

var resetBenches = function(benches) {
  _benches = benches;
  return _benches;
};

var findBench = function(id) {
  for (var prop in _benches) {
    if (_benches[prop]['id'] === id) {
      return _benches[prop];
    }
  }
};

var BenchStore = new Store(Dispatcher);

BenchStore.all = function () {
  return Object.assign({}, _benches);
};

BenchStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case BenchConstants.BENCHES_RECEIVED:
      var result = resetBenches(payload.benches);
        BenchStore.__emitChange();
        break;
    case BenchConstants.SET_MARKER:
      // var result = resetBenches(payload.benches);
        BenchStore.__emitChange();
        break;
  }
};

module.exports = BenchStore;
