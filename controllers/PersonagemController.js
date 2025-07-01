const PersonagemModel = require('../models/PersonagemModel');

const create = async (req, res) => {
  try {
    // Validação simples
    if (!req.body.nome) {
      return res.status(400).json({ message: 'O campo "nome" é obrigatório.' });
    }
    const character = await PersonagemModel.createCharacter(req.body);
    res.status(201).json(character);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar personagem', error: error.message });
  }
};

const getAll = async (req, res) => {
  try {
    const characters = await PersonagemModel.getAllCharacters();
    res.status(200).json(characters);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar personagens', error: error.message });
  }
};

const getById = async (req, res) => {
  try {
    const character = await PersonagemModel.getCharacterById(req.params.id);
    if (character) {
      res.status(200).json(character);
    } else {
      res.status(404).json({ message: 'Personagem não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar personagem', error: error.message });
  }
};

const update = async (req, res) => {
  try {
    const updated = await PersonagemModel.updateCharacter(req.params.id, req.body);
    if (updated) {
      res.status(200).json({ id: req.params.id, ...req.body });
    } else {
      res.status(404).json({ message: 'Personagem não encontrado para atualização' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar personagem', error: error.message });
  }
};

const remove = async (req, res) => {
  try {
    const deleted = await PersonagemModel.deleteCharacter(req.params.id);
    if (deleted) {
      res.status(200).json({ message: 'Personagem excluído com sucesso' });
    } else {
      res.status(404).json({ message: 'Personagem não encontrado para exclusão' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao excluir personagem', error: error.message });
  }
};

module.exports = { create, getAll, getById, update, remove };
