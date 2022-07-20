const router = require('express').Router();
const { products } = require("../controllers/products");

router.use('/api', products)

module.exports = router