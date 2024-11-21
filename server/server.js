const express = require('express');
const cors = require('cors');
const path = require('path');

// BASE DE DATOS Y MODELOS
const database = require('./config/database');
require('./models/index'); // Importa todos los modelos y asociaciones

// RUTAS
const productRoutes = require('./routes/productRoutes');
const purchaseRoutes = require('./routes/purchaseRoute');
const saleRoutes = require('./routes/saleRoutes');
/* const eventRoutes = require('./routes/eventRoutes');
const locationRoutes = require('./routes/locationRoutes');
const zoneRotues = require('./routes/zoneRoutes');
const eventTypeRoutes = require('./routes/eventTypeRoutes');
const ticketRoutes = require('./routes/ticketRoutes');
const ticketStatusRoutes = require('./routes/ticketStatusRoutes');
const ticketTypeRoutes = require('./routes/ticketTypeRoutes');
const attendeeRoutes = require('./routes/attendeeRoutes');
const paymentMethodRoutes = require('./routes/paymentMethodRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const surveyRoutes = require('./routes/surveyRoutes');
const speakerRoutes = require('./routes/speakerRoutes'); */

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// USO RUTAS
app.use('/api', productRoutes);
app.use('/api', purchaseRoutes);
app.use('/api', saleRoutes);
/* app.use('/api', eventTypeRoutes);
app.use('/api', locationRoutes);
app.use('/api', zoneRotues);
app.use('/api', eventRoutes);
app.use('/api', ticketRoutes);
app.use('/api', ticketStatusRoutes);
app.use('/api', ticketTypeRoutes);
app.use('/api', attendeeRoutes);
app.use('/api', paymentMethodRoutes);
app.use('/api', paymentRoutes);
app.use('/api', surveyRoutes);
app.use('/api', speakerRoutes); */

// AUTENTICACIÓN DE LA BASE DE DATOS
database.authenticate()
    .then(() => console.log('Conectado a la base de datos.'))
    .catch(err => console.error('Error al conectar:', err));

// SINCRONIZACIÓN DE SEQUELIZE
database.sync({ force: false })
    .then(() => console.log('Tablas creadas/sincronizadas automáticamente'))
    .catch(err => console.log('Error al sincronizar las tablas:', err));

// INICIAR EL SERVIDOR
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});