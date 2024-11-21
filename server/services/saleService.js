const Sale = require('../models/sale');
const Product = require('../models/product');

// Sale Service
class SaleService {
  async getAll() {
    try {
      /* return await Sale.findAll({
        include: [
          'eventType',
          'manager',
          'locations',
          'tickets',
          'surveys'
        ]
      }); */
      return await Sale.findAll();
    } catch (error) {
      throw new Error('Error al obtener los Sales: ' + error.message);
    }
  }

  async create(id, data) {
    try {
      // Buscar el producto asociado
      const product = await Product.findByPk(id);

      const quantity = data.quantity;
  
      if (!product) {
        throw new Error('Producto no encontrado');
      }

      data.name = product.name;
  
      // Crear la compra
      const sale = await Sale.create(data);
  
      // Actualizar el inventario del producto
      product.quantity -= quantity;
      await product.save();
  
      return sale;
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

module.exports = new SaleService();