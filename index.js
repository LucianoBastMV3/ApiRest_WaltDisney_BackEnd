require('dotenv').config();
const express = require('express');
const personagemRoutes = require('./routes/personagemRoutes');

const app = express();

// Middleware para permitir que o Express entenda JSON no corpo das requisições
app.use(express.json());

// Usar as rotas de personagens
app.use('/api', personagemRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
