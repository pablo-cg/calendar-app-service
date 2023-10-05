import express from 'express';

const PORT = 4000;

const app = express();

app.get('/', (req, resp) => {
  resp.json({
    ok: true,
  });
});

app.listen(PORT, () => {
  console.log(`🚀 ~ Servidor corriendo en el puerto: ${PORT} ~`);
});
