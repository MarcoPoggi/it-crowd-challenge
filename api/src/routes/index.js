const router = require("express").Router();
const { products } = require("../controllers/products");
const { auth } = require("../controllers/auth");
const { brands } = require("../controllers/brands");

router.use("/api", [products, auth, brands]);

module.exports = router;
