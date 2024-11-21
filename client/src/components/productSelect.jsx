import React, { useState, useEffect } from 'react';

const ProductSelect = ({ id, onProductChange }) => {
    const [inventory, setInventory] = useState([]);

    const handleSelectChange = (e) => {
        const selectedId = e.target.value;
        onProductChange(selectedId);
        console.log(selectedId);
    };

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
            <label htmlFor="product-select">Seleccionar Producto:</label>
            <select
                id="product-select"
                value={id || ''}
                onChange={handleSelectChange}
                required
            >
                <option value="" disabled>
                    Seleccionar producto
                </option>
                {inventory.map((item) => (
                    <option key={item.id} value={item.id}>{item.name}</option>
                ))
                }
            </select>
        </div>
    );
};

export default ProductSelect;