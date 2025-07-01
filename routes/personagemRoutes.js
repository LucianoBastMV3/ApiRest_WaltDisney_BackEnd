const express = require('express');
const router = express.Router();
const PersonagemController = require('../controllers/PersonagemController');

// Rota para criar um novo personagem
router.post('/personagens', PersonagemController.create);

// Rota para listar todos os personagens
router.get('/personagens', PersonagemController.getAll);

// Rota para obter um personagem por ID
router.get('/personagens/:id', PersonagemController.getById);

// Rota para atualizar um personagem por ID
router.put('/personagens/:id', PersonagemController.update);

// Rota para excluir um personagem por ID
router.delete('/personagens/:id', PersonagemController.remove);

module.exports = router;
