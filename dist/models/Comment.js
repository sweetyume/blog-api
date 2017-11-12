'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
var newComment = new Schema({
  name: { type: String, required: true },
  date: { type: String, default: (0, _moment2.default)().format('YYYY/MM/DD, h:mm A') },
  content: { type: String, required: true },
  contact: { type: String, required: true }
  // article: {type: Schema.Types.ObjectId, ref: 'Article'}

});

module.exports = _mongoose2.default.model('Comment', newComment);
//# sourceMappingURL=Comment.js.map