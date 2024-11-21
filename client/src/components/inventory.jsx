import React, { useState, useEffect } from 'react';
// import { fetchInventory } from '../services/api';

const Inventory = () => {
    const [inventory, setInventory] = useState([]);

    const getProductData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/products', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',/* 
            'Authorization': `Bearer ${token}`, */
          },
        });
  
        if (!response.ok) {
          throw new Error('Error en la solicitud');
        }
  
        const result = await response.json();
        setInventory(result);
        
      } catch (error) {
        console.error('Error al enviar los datos del usuario:', error);
      }
    };

    useEffect(() => {
        getProductData();
    }, []);

    return (
        <div>
            <h2>Inventario</h2>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Producto</th>
                        <th>Cantidad</th>
                    </tr>
                </thead>
                <tbody>
                    {inventory.map((item) => (
                        <tr key={item.id}>
                            <td>{item.date}</td>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Inventory;

/* 

import React, { useState, useEffect } from 'react';

const Inventory = () => {
  const [inventory, setInventory] = useState([]);

  // Simulación de datos
  useEffect(() => {
    const mockInventory = [
      { id: 1, name: 'Panzerotti clásico', quantity: 50, price: 3.5 },
      { id: 2, name: 'Panzerotti de queso', quantity: 30, price: 4.0 },
      { id: 3, name: 'Panzerotti de jamón y queso', quantity: 20, price: 4.5 },
      { id: 4, name: 'Panzerotti vegetariano', quantity: 15, price: 4.2 },
    ];
    setInventory(mockInventory);
  }, []);

  return (
    <div>
      <h2>Inventario</h2>
      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>${item.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Inventory; */