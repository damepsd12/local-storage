// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const { addProduct, getAllProducts } = require('../controllers/product');

router.post('/products', addProduct);

router.get('/products', getAllProducts);

module.exports = router;
