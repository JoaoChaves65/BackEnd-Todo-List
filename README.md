# To-Do List Backend

## ⚙ Funcionalidades

- *Editar tarefas*: Permite alterar o texto de uma tarefa existente.
- *Modo escuro*: Suporte a tema escuro para melhor experiência do usuário.

---

## 🔧 Tecnologias

As seguintes ferramentas foram usadas no desenvolvimento deste projeto:

#### *Backend*  ([Node.js](https://nodejs.org/))

- [*Express.js*](https://expressjs.com/): Framework minimalista e eficiente para rotas e middleware.
- [*TypeScript*](https://www.typescriptlang.org/): Adiciona tipagem estática para maior confiabilidade e manutenção.
- [*Mongoose*](https://mongoosejs.com/): Abstração para interagir com o MongoDB.
- [*Zod*](https://zod.dev/): Validação de dados flexível e declarativa.
- [*dotenv*](https://github.com/motdotla/dotenv): Gerenciamento de variáveis de ambiente.

---

## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, você precisará ter as seguintes ferramentas instaladas na sua máquina:

- [*Node.js*](https://nodejs.org/en/)
- [*MongoDB*](https://www.mongodb.com/) (local ou em um serviço como MongoDB Atlas)
- Um editor de texto, como [*VSCode*](https://code.visualstudio.com/).

### 🎢 Rodando o Backend

1. Clone este repositório:

   bash
   git clone <https://github.com/JoaoChaves65/BackEnd-Todo-List.git>
   

2. Acesse a pasta do projeto:

   bash
   cd todo-backend
   

3. Instale as dependências:

   bash
   npm install
   

4. Configure as variáveis de ambiente no arquivo .env:

   env
   MONGO_URI=mongodb://127.0.0.1:27017/todo
   PORT=3000
   

   - *MONGO\_URI*: String de conexão ao banco MongoDB.
   - *PORT*: Porta onde o servidor será executado.

5. Inicie o servidor:

   bash
   npm run start
   

6. O servidor estará rodando no endereço:

   
   http://localhost:3000
   

---

## 🔍 Endpoints da API

### *Tarefas*

#### *Criar uma tarefa*

- *POST* /tasks
- Corpo da requisição:
  json
  {
    "text": "Minha nova tarefa"
  }
  
- Resposta de sucesso:
  json
  {
    "id": "63a01b5ec25e3421f4d4a8c9",
    "text": "Minha nova tarefa",
    "completed": false
  }
  

#### *Listar tarefas*

- *GET* /tasks
- Resposta de sucesso:
  json
  [
    {
      "id": "63a01b5ec25e3421f4d4a8c9",
      "text": "Minha nova tarefa",
      "completed": false
    }
  ]
  

#### *Atualizar uma tarefa*

- *PATCH* /tasks/:id
- Corpo da requisição:
  json
  {
    "completed": true
  }
  
- Resposta de sucesso:
  json
  {
    "id": "63a01b5ec25e3421f4d4a8c9",
    "text": "Minha nova tarefa",
    "completed": true
  }
  

#### *Editar uma tarefa*

- *PUT* /tasks/:id
- Corpo da requisição:
  json
  {
    "text": "Tarefa editada"
  }
  
- Resposta de sucesso:
  json
  {
    "id": "63a01b5ec25e3421f4d4a8c9",
    "text": "Tarefa editada",
    "completed": false
  }
  

#### *Deletar uma tarefa*

- *DELETE* /tasks/:id
- Resposta de sucesso:
  json
  {
    "message": "Task deleted successfully"
  }
  

---

## 🔄 Estrutura do Projet
```plaintext
src/
|-- controllers/       # Lógica das rotas (taskController.ts)
|-- models/            # Modelos Mongoose (taskModel.ts)
|-- routes/            # Rotas da API (taskRoutes.ts)
|-- validations/       # Esquemas Zod para validação (taskValidation.ts)
|-- app.ts             # Configuração principal do app
|-- server.ts          # Arquivo de inicialização
```

---

## 👨‍💼 Autor

Feito com ❤ por [João Marcos](https://github.com/JoaoChaves65) 🚀
