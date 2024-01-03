const router = require('express').Router();
const { Posts, Users, Comments } = require('../../models');

const withAuth = require('../../utils/auth');

// route to comments page
router.get('/:id', withAuth, async (req, res) => {
  try{ 
    const postCommentData = await Posts.findByPk(req.params.id, {
      include: [{
        model: Users,
        attributes: ['username']
      }]
    });
    

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
    

    res.render('comments', {
      postWithComment,
      userComment,
      title: 'Comment on Post',
      style: 'comment.css',
      logged_in: req.session.logged_in,
      user_id: req.session.user_id
    });
  } catch (err) {
      res.status(500).json(err);
  };     
});

// post new comment
router.post('/', async (req, res) => {
  console.log("MADE TO POST")
  console.log(req.body);
  try {
    const commentData = await Comments.create(req.body);
    console.log(commentData);
    res.status(200).json(commentData);
  } catch (err) {
    res.status(400).json(err);
  }
});


  module.exports = router;