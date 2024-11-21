import React, { useState } from 'react';
//import { addPurchase } from '../services/api';
import ProductSelect from './productSelect';

const Purchases = () => {
  const [id, setId] = useState(null);

  const [purchase, setPurchase] = useState({quantity: 0, price: 0, notes: '', fk_product: id });

  const handleProductChange = (selectedId) => {
    setId(selectedId);
    setPurchase((prevPurchase) => ({
      ...prevPurchase,
      fk_product: selectedId,
    }));
  };

  const handleSubmit = async (e) => {
    /* e.preventDefault();
    console.log(purchase);
    console.log(id); */
    try {
      const response = await fetch(`http://localhost:3000/api/pruchases/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',/* 
            'Authorization': `Bearer ${token}`, */
        },
        body: JSON.stringify(purchase),
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
      <h2>Registrar Compra</h2>
      <form onSubmit={handleSubmit}>
        <ProductSelect id={id} onProductChange={handleProductChange}></ProductSelect>

        {/* <input
          id='name'
          type="text"
          placeholder="Nombre del producto"
          value={purchase.name}
          onChange={(e) => setPurchase({ ...purchase, name: e.target.value })}
          required
        /> */}
        <label htmlFor="quantity">Quantity</label>
        <input id='quantity'
          type="number"
          value={purchase.quantity}
          onChange={(e) => setPurchase({ ...purchase, quantity: e.target.value })}
          required
        />
        <label htmlFor="price">Price</label>
        <input
          id='price'
          type="number"
          value={purchase.price}
          onChange={(e) => setPurchase({ ...purchase, price: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Notas"
          value={purchase.notes}
          onChange={(e) => setPurchase({ ...purchase, notes: e.target.value })}
        />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default Purchases;