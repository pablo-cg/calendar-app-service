import express from 'express';
import 'dotenv/config';

const PORT = process.env.PORT;

const app = express();

app.use(express.static('public'));

app.get('/test', (req, res) => {
  res.json({
    ok: true,
  });
});

app.listen(PORT, () => {
  console.log(`🚀 ~ Servidor corriendo en el puerto: ${PORT} ~`);
});
