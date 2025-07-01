# API de Personagens - Walt Disney

## 📝 Descrição

Esta é uma API RESTful desenvolvida em Node.js com arquitetura MVC para registrar e gerenciar os dados dos personagens mais icônicos da Walt Disney. A aplicação realiza operações completas de CRUD (Create, Read, Update, Delete) com persistência de dados em um banco de dados **SQL Server**.

Este projeto foi desenvolvido como parte de um desafio acadêmico, focando em boas práticas de desenvolvimento back-end, uso de variáveis de ambiente e estrutura de projeto organizada.

## ✨ Funcionalidades

-   **Criar** um novo personagem.
-   **Listar** todos os personagens cadastrados.
-   **Obter** os dados de um personagem específico por seu ID.
-   **Atualizar** os dados de um personagem existente.
-   **Excluir** um personagem do banco de dados.

## 🛠️ Tecnologias Utilizadas

-   **Node.js (v14.16.1)** - Ambiente de execução JavaScript.
-   **Express.js (v4)** - Framework para criação da API e gerenciamento de rotas.
-   **SQL Server** - Banco de dados para persistência dos dados.
-   **mssql (v7)** - Driver para conectar a aplicação Node.js ao SQL Server.
-   **dotenv** - Para gerenciamento de variáveis de ambiente.

## ⚙️ Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina:
-   [Node.js](https://nodejs.org/) (versão **14.16.1** ou compatível com as dependências do `package.json`).
-   NPM (geralmente instalado com o Node.js).
-   Uma instância do **SQL Server** rodando.
-   Um cliente de API como o Postman para testar os endpoints.

## 🚀 Instalação e Execução

1.  **Clone o repositório:**
    ```bash
    git clone <url-do-seu-repositorio>
    cd ApiRest_WaltDisney_BackEnd
    ```

2.  **Crie o arquivo de variáveis de ambiente:**
    Crie um arquivo chamado `.env` na raiz do projeto e adicione as seguintes variáveis, substituindo pelos seus dados de conexão com o SQL Server:
    ```env
    # Credenciais do SQL Server
    DB_USER=seu_usuario_sql_server
    DB_PASSWORD=sua_senha_sql_server
    DB_SERVER=localhost
    DB_DATABASE=WaltDisney
    DB_PORT=30000

    # Opções de conexão
    DB_OPTIONS_ENCRYPT=false
    DB_OPTIONS_TRUSTSERVERCERTIFICATE=true

    # Porta da aplicação
    PORT=3000
    ```

3.  **Configure o Banco de Dados:**
    Execute o script `database/schema.sql` na sua instância do SQL Server para criar o banco de dados `WaltDisney` e a tabela `personagem_disney`.

4.  **Instale as dependências:**
    ```bash
    npm install
    ```

5.  **Inicie o servidor:**
    ```bash
    node index.js
    ```
    O servidor estará rodando em `http://localhost:3000`.

## 🛣️ Endpoints da API

A URL base para todos os endpoints é `http://localhost:3000/api`.

#### Criar Personagem
-   **Método:** `POST`
-   **URL:** `/personagens`
-   **Corpo da Requisição (JSON):**
    ```json
    {
        "nome": "Mickey Mouse",
        "apelido": "Mickey",
        "biografia": "Mascote da The Walt Disney Company.",
        "data_criacao": "1928-11-18",
        "local_nascimento": "Estúdios Disney",
        "descricao_vestimentas": "Calções vermelhos e luvas brancas.",
        "foto_perfil_url": "http://example.com/mickey.png",
        "especie": "Rato",
        "nome_criador": "Walt Disney"
    }
    ```
-   **Resposta de Sucesso (201 Created):** Retorna o objeto do personagem criado com seu `id`.

#### Listar Todos os Personagens
-   **Método:** `GET`
-   **URL:** `/personagens`
-   **Resposta de Sucesso (200 OK):** Retorna um array com todos os personagens.

#### Obter Personagem por ID
-   **Método:** `GET`
-   **URL:** `/personagens/:id`
-   **Resposta de Sucesso (200 OK):** Retorna o objeto do personagem correspondente ao `id`.
-   **Resposta de Erro (404 Not Found):** Se o personagem não for encontrado.

#### Atualizar Personagem
-   **Método:** `PUT`
-   **URL:** `/personagens/:id`
-   **Corpo da Requisição (JSON):** O objeto completo do personagem com os dados atualizados.
-   **Resposta de Sucesso (200 OK):** Retorna o objeto do personagem com os dados atualizados.
-   **Resposta de Erro (404 Not Found):** Se o personagem não for encontrado.

#### Excluir Personagem
-   **Método:** `DELETE`
-   **URL:** `/personagens/:id`
-   **Resposta de Sucesso (200 OK):** `{"message": "Personagem excluído com sucesso"}`
-   **Resposta de Erro (404 Not Found):** Se o personagem não for encontrado.