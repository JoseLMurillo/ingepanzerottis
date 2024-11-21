const Product = require('../models/product');

// Product Service
class ProductService {
  async getAll() {
    try {
      /* return await Product.findAll({
        include: [
          'eventType',
          'manager',
          'locations',
          'tickets',
          'surveys'
        ]
      }); */
      return await Product.findAll();
    } catch (error) {
      throw new Error('Error al obtener los products: ' + error.message);
    }
  }

  async create(data) {
    try {
      return await Product.create(data);
    } catch (error) {
      throw new Error('Error al crear el Product: ' + error.message);
    }
  }

  /* async getById(id) {
    try {
      const product = await Product.findByPk(id, {
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

  async createProductWithLocation (productData, locationId) {
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

module.exports = new ProductService();