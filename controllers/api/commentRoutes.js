const router = require('express').Router();
const { Posts, Users, Comments } = require('../../models');

const withAuth = require('../../utils/auth');

// route to comments page
router.get('/:id', withAuth, async (req, res) => {
  console.log('In correct GET Area')
  try{ 
    const postCommentData = await Posts.findByPk(req.params.id, {
      include: [{
        model: Users,
        attributes: ['username']
      }]
    });
    
    console.log(postCommentData);

    if(!postCommentData) {
      res.status(404).json({message: 'No post with this id!'});
      return;
    }
    
    const postWithComment = postCommentData.get({ plain: true });
    
    const commentData = await Comments.findAll({
      where: {post_id: req.params.id},
      include: [{
        model: Users,
        attributes: ['username']
      }]
    });

    const userComment = commentData.map((comment) => comment.get({ plain: true}));
    
    console.log(userComment);

    res.render('comments', {
      postWithComment,
      userComment,
      title: 'Comment on Post',
      style: 'comment.css',
      logged_in: req.session.logged_in
    });
  } catch (err) {
      res.status(500).json(err);
  };     
});


  module.exports = router;