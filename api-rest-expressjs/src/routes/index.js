const express = require('express');
const router = express.Router();

router.use('/products', require('./products.router'));
router.use('/users', require('./users.route'));
router.get("/", (req,res) => {
  res.send('hello world')
})

module.exports = router;
