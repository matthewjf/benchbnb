var Dispatcher = require('../dispatcher/dispatcher'),
    ApiUtil = require('../util/api_util'),
    BenchConstants = require('../constants/bench_constants'),
    MarkerConstants = require('../constants/marker_constants');

var ClientActions = {
  fetchBenches: ApiUtil.fetchBenches,
  createBench: ApiUtil.createBench
};

module.exports = ClientActions;
