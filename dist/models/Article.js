'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
var newArticle = new Schema({
  author: { type: String, required: true },
  date: { type: String, default: (0, _moment2.default)().format('YYYY/MM/DD, h:mm A') },
  // updated: { type: Date, default: moment().startOf('day').fromNow() },
  title: { type: String, required: true },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }] // ref se réfère à la collection

});

module.exports = _mongoose2.default.model('Article', newArticle);
//# sourceMappingURL=Article.js.map