import {Router} from 'express';
import mongoose from 'mongoose';

import Article from '../../models/Article';

const router = Router();

// ROUTES ARTICLES

// créer un nouvel article
// route '/app/articles/add'

router.post('/add', (req, res) => {
    const newArticle = new Article(req.body);

    newArticle.save((err, article) => {
        if (err) {
            res.send(err);
        }
        res.json({ "success": `L'article de ${article.author}, '${article.title}' a été ajouté` });
    });

});

// afficher tous les articles
// route '/app/articles'

router.get('/', (req, res) => {
    Article.find((err, articles) => {
        if (err) {
            res.send(err);
        }
        res.json(articles);
    });
});

// chercher un article par id
// route '/app/articles/:id'

router.get('/:id', (req, res) => {
    Article.findById(req.params.id, (err, article) => {
        if (err) {
            res.send(err);
        }
        res.json(article);
    });
});

// éditer un article
// route '/app/articles/edit/:id'

router.post('/edit/:id', (req, res) => {
    Article.findByIdAndUpdate(req.params.id, req.body, (err, updatedArticle) => {
        if (err) {
            res.send(err);
        }
        res.json({ "success": `${updatedArticle.title} a été mis à jour` })
    });
});

// supprimer un article
// route '/app/articles/delete/:id'
router.post('/delete/:id', (req, res) => {
    Article.findByIdAndRemove(req.params.id, (err, deletedArticle) => {
        if (err) { res.send(err) }
        res.json({ "success": `${deletedArticle.title} a été supprimé` })
    });
});




module.exports = router;