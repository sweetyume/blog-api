'use strict';

var _express = require('express');

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _Article = require('../../models/Article');

var _Article2 = _interopRequireDefault(_Article);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

// ROUTES ARTICLES

// créer un nouvel article
// route /app/articles/add

router.post('/add', function (req, res) {
    var newArticle = new _Article2.default(req.body);

    newArticle.save(function (err, article) {
        if (err) {
            res.send(err);
        }
        res.json({ "success": 'L\'article de ' + article.author + ', \'' + article.title + '\' a \xE9t\xE9 ajout\xE9' });
    });
});

// afficher tous les articles
// route /app/articles

router.get('/', function (req, res) {
    _Article2.default.find(function (err, articles) {
        if (err) {
            res.send(err);
        }
        res.json(articles);
    });
});

// chercher un article par id
// route /app/articles/:id

router.get('/:id', function (req, res) {
    _Article2.default.findById(req.params.id, function (err, article) {
        if (err) {
            res.send(err);
        }
        res.json(article);
    });
});

// éditer un article
// route /app/articles/edit/:id

router.post('/edit/:id', function (req, res) {
    _Article2.default.findByIdAndUpdate(req.params.id, req.body, function (err, updatedArticle) {
        if (err) {
            res.send(err);
        }
        res.json({ "success": updatedArticle.title + ' a \xE9t\xE9 mis \xE0 jour' });
    });
});

// supprimer un article
// route /app/articles/delete/:id
router.post('/delete/:id', function (req, res) {
    _Article2.default.findByIdAndRemove(req.params.id, function (err, deletedArticle) {
        if (err) {
            res.send(err);
        }
        res.json({ "success": deletedArticle.title + ' a \xE9t\xE9 supprim\xE9' });
    });
});

module.exports = router;
//# sourceMappingURL=articleRoute.js.map