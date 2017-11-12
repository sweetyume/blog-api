'use strict';

var _express = require('express');

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _Article = require('../../models/Article');

var _Article2 = _interopRequireDefault(_Article);

var _Comment = require('../../models/Comment');

var _Comment2 = _interopRequireDefault(_Comment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

// ROUTES COMMENTAIRES

// ajouter un commentaire pour un article
// route 'app/comments/add'

router.post('/add', function (req, res) {
    var newComment = new _Comment2.default(req.body);

    newComment.save(function (errz) {
        if (err) {
            res.send(err);
        }
        res.json({
            "success": "A comment has been saved"
        });
    });
});

// voir les commentaires
// route '/app/comments'

router.get('/', function (req, res) {
    _Comment2.default.find({}, function (err, comments) {
        if (err) {
            res.send(err);
        }
        res.json({ comments: comments });
    });
});

// éditer un commentaire
// route /app/articles/:commentid/edit

router.post('/:commentid/edit', function (req, res) {
    _Comment2.default.findByIdAndUpdate(req.params.commentid, { $set: { content: req.body.content } }, function (err, updatedComment) {
        if (err) {
            res.send(err);
        }
        res.json({
            "success": "comment updated"
        });
    });
});

module.exports = router;
//# sourceMappingURL=commentRoute.js.map