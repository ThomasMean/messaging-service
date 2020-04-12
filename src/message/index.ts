var express = require('express');
var router = express.Router();


// Home page route.
// Supressing type errors due to lack of type availability
// @ts-ignore
router.post('/', function (req, res) {
    res.send('Post Endpoint');
});

module.exports = router;
