import mongoose from 'mongoose';

export async function dbConnection() {
  try {
    await mongoose.connect(process.env.DB_CONN, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    });

    console.log("🚀 ~ dbConnection ~ Base de Datos Inicializada")
  } catch (error) {
    console.log(error);
    throw new Error('error al inicializar la base de datos');
  }
}
