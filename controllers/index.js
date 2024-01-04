const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

// set up api routes and homeroutes
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;