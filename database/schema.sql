IF NOT EXISTS (SELECT * FROM sys.databases WHERE name = 'disney_db')
BEGIN
    CREATE DATABASE disney_db;
END
GO

USE disney_db;
GO

IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='personagem_disney' and xtype='U')
BEGIN
    CREATE TABLE personagem_disney (
    id INT IDENTITY(1,1) PRIMARY KEY,
    nome NVARCHAR(255) NOT NULL,
    apelido NVARCHAR(255),
    biografia NVARCHAR(MAX),
    data_criacao DATE,
    local_nascimento NVARCHAR(255),
    descricao_vestimentas NVARCHAR(MAX),
    foto_perfil_url NVARCHAR(255),
    especie NVARCHAR(100),
    nome_criador NVARCHAR(255)
);
END
GO
