const { sql, poolPromise } = require('../database/db');

const createCharacter = async (characterData) => {
  const pool = await poolPromise;
  const { nome, apelido, biografia, data_criacao, local_nascimento, descricao_vestimentas, foto_perfil_url, especie, nome_criador } = characterData;
  
  // SQL Server retorna o ID inserido com a cláusula OUTPUT
  const query = `
    INSERT INTO personagem_disney (nome, apelido, biografia, data_criacao, local_nascimento, descricao_vestimentas, foto_perfil_url, especie, nome_criador) 
    OUTPUT INSERTED.id
    VALUES (@nome, @apelido, @biografia, @data_criacao, @local_nascimento, @descricao_vestimentas, @foto_perfil_url, @especie, @nome_criador)`;
  
  const request = pool.request();
  request.input('nome', sql.NVarChar, nome);
  request.input('apelido', sql.NVarChar, apelido);
  request.input('biografia', sql.NVarChar, biografia);
  request.input('data_criacao', sql.Date, data_criacao);
  request.input('local_nascimento', sql.NVarChar, local_nascimento);
  request.input('descricao_vestimentas', sql.NVarChar, descricao_vestimentas);
  request.input('foto_perfil_url', sql.NVarChar, foto_perfil_url);
  request.input('especie', sql.NVarChar, especie);
  request.input('nome_criador', sql.NVarChar, nome_criador);

  const result = await request.query(query);
  const id = result.recordset[0].id;
  return { id, ...characterData };
};

const getAllCharacters = async () => {
  const pool = await poolPromise;
  const query = 'SELECT * FROM personagem_disney';
  const result = await pool.request().query(query);
  return result.recordset;
};

const getCharacterById = async (id) => {
  const pool = await poolPromise;
  const query = 'SELECT * FROM personagem_disney WHERE id = @id';
  const result = await pool.request()
    .input('id', sql.Int, id)
    .query(query);
  return result.recordset[0];
};

const updateCharacter = async (id, characterData) => {
  const pool = await poolPromise;
  const { nome, apelido, biografia, data_criacao, local_nascimento, descricao_vestimentas, foto_perfil_url, especie, nome_criador } = characterData;
  
  const query = `
    UPDATE personagem_disney 
    SET nome = @nome, apelido = @apelido, biografia = @biografia, data_criacao = @data_criacao, 
        local_nascimento = @local_nascimento, descricao_vestimentas = @descricao_vestimentas, 
        foto_perfil_url = @foto_perfil_url, especie = @especie, nome_criador = @nome_criador 
    WHERE id = @id`;

  const request = pool.request();
  request.input('id', sql.Int, id);
  request.input('nome', sql.NVarChar, nome);
  request.input('apelido', sql.NVarChar, apelido);
  request.input('biografia', sql.NVarChar, biografia);
  request.input('data_criacao', sql.Date, data_criacao);
  request.input('local_nascimento', sql.NVarChar, local_nascimento);
  request.input('descricao_vestimentas', sql.NVarChar, descricao_vestimentas);
  request.input('foto_perfil_url', sql.NVarChar, foto_perfil_url);
  request.input('especie', sql.NVarChar, especie);
  request.input('nome_criador', sql.NVarChar, nome_criador);

  const result = await request.query(query);
  return result.rowsAffected[0] > 0;
};

const deleteCharacter = async (id) => {
  const pool = await poolPromise;
  const query = 'SELECT * FROM personagem_disney WHERE id = @id';
  const result = await pool.request()
    .input('id', sql.Int, id)
    .query(query);
  return result.rowsAffected[0] > 0;
};

module.exports = {
  createCharacter,
  getAllCharacters,
  getCharacterById,
  updateCharacter,
  deleteCharacter,
};
