const PurchaseService = require('../services/purchaseService');

  // product Controller
  class PurchaseController {
    async getAllpurchases(req, res) {
      try {
        const products = await PurchaseService.getAll();
        res.status(200).json(products);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  
    async createPurchase(req, res) {
      try {
        const newproduct = await PurchaseService.create(req.params.id, req.body);
        res.status(201).json(newproduct);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }

    /* async getproductById(req, res) {
      try {
        const product = await PurchaseService.getById(req.params.id);
        res.status(200).json(product);
      } catch (error) {
        res.status(404).json({ error: error.message });
      }
    }

    async createproductWithLocation (req, res) {
      const { name, description, number_attendees, start_date, end_date, fk_type, locationId } = req.body;
    
      try {
        const productData = { name, description, number_attendees, start_date, end_date, fk_type };
        const product = await PurchaseService.createproductWithLocation(productData, locationId);
    
        res.status(201).json({
          message: 'product created and associated with location successfully',
          product
        });
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    }
  
    
  
    async updateproduct(req, res) {
      try {
        const updatedproduct = await PurchaseService.update(req.params.id, req.body);
        res.status(200).json(updatedproduct);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }
  
    async deleteproduct(req, res) {
      try {
        await PurchaseService.delete(req.params.id);
        res.status(200).json({ message: 'producto eliminado correctamente' });
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    } */
  }

  module.exports = new PurchaseController();