import express from 'express';
import 'dotenv/config';
import auth from './routes/auth.js';

const PORT = process.env.PORT;

// Crear app
const app = express();

// Generar directorio publico
app.use(express.static('public'));

// Middleware de parseo
app.use(express.json())

// Endpoints
app.use('/api/auth', auth);

// Inicializar app
app.listen(PORT, () => {
  console.log(`🚀 ~ Servidor corriendo en el puerto: ${PORT} ~`);
});
