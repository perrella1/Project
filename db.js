const mongoose = require('mongoose');
require('dotenv').config(); // Carregar as variáveis de ambiente do arquivo .env

const conectarBancoDeDados = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Conectado ao MongoDB Atlas');
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB', error);
    process.exit(1); // Encerrar o processo em caso de erro de conexão
  }
};

module.exports = conectarBancoDeDados;
