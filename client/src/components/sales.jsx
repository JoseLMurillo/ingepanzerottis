import React, { useState } from 'react';
import ProductSelect from './productSelect';

//import { addSale } from '../services/api';

const Sales = () => {
  const [id, setId] = useState(null);
  const [sale, setSale] = useState({ quantity: 0, price: 0, notes: ''});

  const handleProductChange = (selectedId) => {
    setId(selectedId);
    setSale((prevSale) => ({
      ...prevSale,
      fk_product: selectedId,
    }));
  };

  const handleSubmit = async (e) => {
    /* e.preventDefault();
    console.log(purchase);
    console.log(id); */
    try {
      const response = await fetch(`http://localhost:3000/api/sales/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',/* 
            'Authorization': `Bearer ${token}`, */
        },
        body: JSON.stringify(sale),
      });

      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }

      const result = await response.json();
      //console.log('Usuario guardado:', result);

    } catch (error) {
      console.error('Error al enviar los datos del usuario:', error);
    }
  };

  return (
    <div>
      <h2>Registrar Venta</h2>
      <form onSubmit={handleSubmit}>
        <ProductSelect id={id} onProductChange={handleProductChange}></ProductSelect>
        <label htmlFor="quantity">Quantity</label>
        <input
          id='quantity'
          type="number"
          placeholder="Cantidad"
          value={sale.quantity}
          onChange={(e) => setSale({ ...sale, quantity: e.target.value })}
          required
        />
        <label htmlFor="price">Price</label>
        <input
          id='price'
          type="number"
          value={sale.price}
          onChange={(e) => setSale({ ...sale, price: e.target.value })}
          required
        />
        {/* <label htmlFor="date">Date</label>
        <input
          id='date'
          type="date"
          value={sale.quantity}
          onChange={(e) => setSale({ ...sale, date: e.target.value })}
        /> */}
        <input
          type="text"
          placeholder="Notas"
          value={sale.notes}
          onChange={(e) => setPurchase({ ...sale, notes: e.target.value })}
        />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default Sales;