'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _articleRoute = require('./articleRouter/articleRoute');

var _articleRoute2 = _interopRequireDefault(_articleRoute);

var _commentRoute = require('./commentRouter/commentRoute');

var _commentRoute2 = _interopRequireDefault(_commentRoute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.use('/articles', _articleRoute2.default);
router.use('/comments', _commentRoute2.default);

module.exports = router;
//# sourceMappingURL=routes.js.map