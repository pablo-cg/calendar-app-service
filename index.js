import express from 'express';
import 'dotenv/config';
import auth from './routes/auth.js';
import events from './routes/events.js';
import { dbConnection } from './database/config.js';
import cors from 'cors';

const PORT = process.env.PORT;

// Crear app
const app = express();

// Inicializacion de BD
dbConnection();

// CORS
app.use(cors());

// Generar directorio publico
app.use(express.static('public'));

// Middleware de parseo
app.use(express.json());

// Endpoints
app.use('/api/auth', auth);
app.use('/api/events', events);

// Inicializar app
app.listen(PORT, () => {
  console.log(`🚀 ~ Servidor corriendo en el puerto: ${PORT} ~`);
});
