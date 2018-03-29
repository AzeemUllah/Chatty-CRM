const express = require('express');
const router = express.Router();

router.post('/', function(req, res, next) {
    res.json({"Status": "Error", "Error": "Request Error. ", "Details": "No data in request body. "});
});

module.exports = router;
