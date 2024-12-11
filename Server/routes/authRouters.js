const express = require('express')
const router = express.Router();
const cors = require('cors');
const mongoose = require('mongoose')

// const { test } = require('../controllers/outhController')
const { test } = require('../controllers/outhController')

router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173'
    })
)
router.get('/', test)

module.exports = router