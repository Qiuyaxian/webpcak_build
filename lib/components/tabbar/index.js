'use strict';

exports.__esModule = true;

var _tabbar = require('./tabbar');

var _tabbar2 = _interopRequireDefault(_tabbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_tabbar2.default.install = function (Vue) {
  Vue.component(_tabbar2.default.name, _tabbar2.default);
};
exports.default = _tabbar2.default;