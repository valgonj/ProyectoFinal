const express = require('express');
const router = express.Router();

const securityApi = require('./security');
const thingsApi = require('./things');

router.get('/', (req, res, next)=>{
    res.status(200).json({"api":"Version 1."})
});

router.use('/security', securityApi);
router.use('/things', thingsApi);

module.exports = router;