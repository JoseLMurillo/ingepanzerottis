const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/productController');
// product Routes
router.get('/products', ProductController.getAllproducts);
router.post('/products', ProductController.createproduct);

/* router.get('/products/:id', ProductController.getproductById);
router.post('/products', ProductController.createproductWithLocation);
router.put('/products/:id', ProductController.updateproduct);
router.delete('/products/:id', ProductController.deleteproduct); */

module.exports = router;