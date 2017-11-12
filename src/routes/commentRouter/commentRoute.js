import { Router } from 'express';
import mongoose from 'mongoose';

import Article from '../../models/Article';
import Comment from '../../models/Comment';

const router = Router();

// ROUTES COMMENTAIRES

// ajouter un commentaire pour un article
// route 'app/articles/comments/:articleid/comment/add

router.post('/:id/comment/add', (req, res) => {
    const newComment = new Comment(req.body);
    newComment.save((err, comment) => {
        if(err) {res.send(err)}
        Article.findByIdAndUpdate(
            req.params.id,
            { $push : {comments: comment._id}},
            err => {
                err?res.send(err)
                :res.json({"message":"votre commentaire a bien été ajouté"});
            });
    });
});

// voir les commentaires pour un article
// route 'app/articles/comments/:articleid/comments'

router.get('/:id/comments', (req, res) => {
    Article.findById(req.params.id)
    .populate('comments')
    .exec((err, article) => {
        if(err) {
            res.send(err);
        }
        res.send(article.comments);
    });
});

// éditer un commentaire pour un article
// route 'app/articles/comments/:articleid/comments/:commentid/edit'

router.post('/:id/comments/:commentid/edit', (req, res) => {
    Comment.findByIdAndUpdate(req.params.commentid, req.body, (err, updatedComment) => {
        if (err) {
            res.send(err);
        }
        Article.findByIdAndUpdate(
            req.params.id,
            { $set: { comments: updatedComment._id } },
            err => {
                err ? res.send(err)
                    : res.json({
                        "message": "Votre commentaire a bien été édité"
                    });
            });
    });
});

// supprimer un commentaire pour un article
// route 'app/articles/comments/:articleid/comments/:commentid/delete'

router.post('/:id/comments/:commentid/delete', (req, res) => {
    Comment.findByIdAndRemove(req.params.commentid, (err, deletedComment) => {
        if (err) { 
            res.send(err);
         }
        Article.findByIdAndUpdate(
            req.params.id,
            { $pull: { comments: deletedComment._id } },
            err => {
                err ? res.send(err)
                    : res.json({
                        "message": "Votre commentaire a bien été supprimé"
                    });
            });
    });
});




// // ajouter un commentaire pour un article
// // route 'app/comments/add'

// router.post('/add', (req, res) => {
//     const newComment = new Comment(req.body);

//     newComment.save((err) => {
//         if (err) {
//             res.send(err);
//         }
//         res.json({
//             "success": "Votre commentaire a bien été ajouté"
//         });
//     });
// });

// // voir les commentaires
// // route '/app/comments'

// router.get('/', (req, res) => {
//     Comment.find({}, (err, comments) => {
//         if (err) {
//             res.send(err);
//         }
//         res.json({ comments });
//     })
// });

// // éditer un commentaire
// // route /app/articles/:commentid/edit

// router.post('/:commentid/edit', (req, res) => {
//     Comment.findByIdAndUpdate(
//         req.params.commentid,
//         { $set: { content: req.body.content } },
//         (err, updatedComment) => {
//             if (err) {
//                 res.send(err)
//             }
//             res.json({
//                 "success": "Votre commentaire a été édité"
//             })
//         });
// });

module.exports = router;