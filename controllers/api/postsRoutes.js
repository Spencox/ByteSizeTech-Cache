const router = require('express').Router();
const { Posts, Users, Comments } = require('../../models');

const withAuth = require('../../utils/auth');

// get post by id
router.get('/:id', withAuth, async (req, res) => {
    try{ 
      const postData = await Posts.findByPk(req.params.id, {
      });
      
      if(!postData) {
        res.status(404).json({message: 'No post with this id!'});
        return;
      }
      
      const post = postData.get({ plain: true });

      console.log(post)
      
      res.render('edit', {
        post,
        title: 'Edit a Post',
        logged_in: req.session.logged_in,
        user_id: req.session.user_id
      });
    } catch (err) {
        res.status(500).json(err);
    };     
  });

// create new post
router.post('/', async (req, res) => {
    console.log("MADE TO POST")
    console.log(req.body);
    try {
      const postData = await Posts.create(req.body);
      console.log(postData);
      res.status(200).json(postData);
    } catch (err) {
      res.status(400).json(err);
    }
  });


// update a post
router.put('/:id', async (req, res) => {
    console.log("MADE TO PUT")
    console.log(req.body);
    try {
    // find post to update
    const postData = await Posts.findByPk(req.params.id, {
    });
    
    if(!postData) {
      res.status(404).json({message: 'No post with this id!'});
      return;
    }
    
    const post = postData.get({ plain: true });

    console.log(post)
    
    postData.title = req.body.title;
    postData.body = req.body.body;

    await postData.save();
    
      res.status(200).json(postData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

// delete a post
router.delete('/:id', async (req, res) => {
    console.log("MADE TO DELETE")
    console.log(req.body);
    try {
    // find post to delete
    const postData = await Posts.findByPk(req.params.id, {
    });
    
    if(!postData) {
      res.status(404).json({message: 'No post with this id!'});
      return;
    }

    await postData.destroy();
    
      res.status(204).send();
    } catch (err) {
      res.status(400).json(err);
    }
  });
  module.exports = router;