import express from 'express';

import articleRouter from './articleRouter/articleRoute';
import commentRouter from './commentRouter/commentRoute';


const router = express.Router();

router.use('/articles', articleRouter);
router.use('/articles/comments', commentRouter);

module.exports = router;
