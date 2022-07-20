const router = require("express").Router();
const { products } = require("../controllers/products");
const { auth } = require("../controllers/auth");

router.use("/api", products);
router.use("/auth", auth);

module.exports = router;
