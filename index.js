import express from 'express';

const PORT = 4000;

const app = express();

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`🚀 ~ Servidor corriendo en el puerto: ${PORT} ~`);
});
