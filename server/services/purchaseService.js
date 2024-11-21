const Purchase = require('../models/purchase');
const Product = require('../models/product');

// Purchase Service
class PurchaseService {
  async getAll() {
    try {
      /* return await Purchase.findAll({
        include: [
          'eventType',
          'manager',
          'locations',
          'tickets',
          'surveys'
        ]
      }); */
      return await Purchase.findAll();
    } catch (error) {
      throw new Error('Error al obtener los Purchases: ' + error.message);
    }
  }

  async create(id, data) {
    try {
      // Buscar el producto asociado
      const product = await Product.findByPk(id);

      const quantity = data.quantity*5;
  
      if (!product) {
        throw new Error('Producto no encontrado');
      }

      data.name = product.name;
  
      // Crear la compra
      const purchase = await Purchase.create(data);
  
      // Actualizar el inventario del producto
      product.quantity += quantity;
      await product.save();
  
      return purchase;
    } catch (error) {
      throw new Error(`Error al crear la compra: ${error.message}`);
    }
  };

  /* async getById(id) {
    try {
      const purchase = await Purchase.findByPk(id, {
        include: [
          'eventType',
          'manager',
          'locations',
          'tickets',
          'surveys'
        ]
      });
      if (!event) throw new Error('Event no encontrado');
      return event;
    } catch (error) {
      throw new Error('Error al obtener el Event: ' + error.message);
    }
  }

  async createPurchaseWithLocation (productData, locationId) {
    try {
      // Crear el evento
      const event = await Event.create(eventData);

      // Buscar la ubicación
      const location = await Location.findByPk(locationId);
      if (!location) {
        throw new Error('Location not found');
      }

      // Asociar el evento con la ubicación
      await event.addLocation(location);

      return event;
    } catch (error) {
      throw error;
    }
  }*/

  /* 

  async update(id, data) {
    try {
      const product = await Product.findByPk(id);
      if (!product) throw new Error('Product no encontrado');
      return await product.update(data);
    } catch (error) {
      throw new Error('Error al actualizar el Product: ' + error.message);
    }
  }

  async delete(id) {
    try {
      const product = await Product.findByPk(id);
      if (!product) throw new Error('Product no encontrado');
      await product.destroy();
      return { message: 'Product eliminado correctamente' };
    } catch (error) {
      throw new Error('Error al eliminar el Product: ' + error.message);
    }
  } */
}

module.exports = new PurchaseService();