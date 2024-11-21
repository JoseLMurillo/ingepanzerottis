const express = require('express');
const router = express.Router();

const SaleController = require('../controllers/saleController');
// product Routes
router.get('/sales', SaleController.getAllSales);
router.post('/sales/:id', SaleController.createSale);

/* router.get('/products/:id', SaleController.getproductById);
router.post('/products', SaleController.createproductWithLocation);
router.put('/products/:id', SaleController.updateproduct);
router.delete('/products/:id', SaleController.deleteproduct); */

module.exports = router;