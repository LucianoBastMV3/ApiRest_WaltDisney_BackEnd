const sql = require('mssql');
require('dotenv').config(); // Carrega as variáveis de ambiente do .env

const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  port: parseInt(process.env.DB_PORT, 10) || 1433,
  options: {
    encrypt: process.env.DB_OPTIONS_ENCRYPT === 'true', // Para Azure
    trustServerCertificate: process.env.DB_OPTIONS_TRUSTSERVERCERTIFICATE === 'true' // Mudar para true para desenvolvimento local
  }
};

// Cria um pool de conexões.
// O pool é criado uma vez e reutilizado em todas as queries.
const poolPromise = new sql.ConnectionPool(dbConfig)
  .connect()
  .then(pool => {
    console.log('Conectado ao SQL Server');
    return pool;
  })
  .catch(err => {
    console.error('Conexão com o banco de dados falhou: ', err);
    process.exit(1); // Encerra a aplicação se não conseguir conectar
  });

module.exports = {
  sql,
  poolPromise
};
