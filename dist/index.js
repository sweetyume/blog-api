'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _config = require('./config/config');

var _config2 = _interopRequireDefault(_config);

var _routes = require('./routes/routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.connect(_config2.default.mongoUrl, function () {
  console.log('db initialized!');
});

var app = (0, _express2.default)();

app.use(_express2.default.urlencoded({ extended: false }));
app.use('/app', _routes2.default);

app.listen(_config2.default.port, function () {
  console.log('Started on port ' + _config2.default.port);
});
//# sourceMappingURL=index.js.map