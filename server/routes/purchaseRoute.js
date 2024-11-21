const express = require('express');
const router = express.Router();

const PurchaseController = require('../controllers/purchaseController');
// product Routes
router.get('/pruchases', PurchaseController.getAllpurchases);
router.post('/pruchases/:id', PurchaseController.createPurchase);

/* router.get('/products/:id', PurchaseController.getproductById);
router.post('/products', PurchaseController.createproductWithLocation);
router.put('/products/:id', PurchaseController.updateproduct);
router.delete('/products/:id', PurchaseController.deleteproduct); */

module.exports = router;