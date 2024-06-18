const express = require('express');
const { generateshortId } = require('../controllers/url.controller');

const router = express.Router();

router.post('/', generateshortId);

module.exports = router;

