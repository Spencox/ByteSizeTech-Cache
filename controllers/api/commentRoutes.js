const router = require('express').Router();
const { Posts } = require('../../models');

// route to comments page
router.get('/:id', async (req, res) => {
    try{ 
      const postCommentData = await Posts.findByPk(req.params.id);
      if(!postCommentData) {
          res.status(404).json({message: 'No post with this id!'});
          return;
      }
      const postWithComment = postCommentData.get({ plain: true });
      res.render('comments', {
        postWithComment,
        title: 'Comment on Post',
        style: 'dashboard.css',
        logged_in: req.session.logged_in
      });
    } catch (err) {
        res.status(500).json(err);
    };     
  });

  module.exports = router;