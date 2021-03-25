# Quiz Game
## Projeto de um quiz com o intuito de testar o usuario com perguntas sobre HTML, CSS e Javascript. O objetivo dele é utilizar o conhecimento dessas 3 linguagens para a criação da aplicação web, utilizando não somente isso como banco de dados, Ajax entre outros.
Tabela de conteúdos
=================
<!--ts-->
   * [index.html](# Página inicial da aplicação, contém o título do jogo e o botão para 'Iniciar Jogo')
   * [app.css](# Apresenta a parte visual da página index.html, as formatações dos textos e caixas)
   * [game.html](# Página do código que recebe a requisição Ajax para obter as perguntas e alternativas do quiz, nela estão as classes e id's que utilizaremos no backend (Javascript))
   * [game.css](# Parte visual do jogo, sua formatação e coloração para respostas corretas e erradas também conta com a parte visual das telas overlay de game over)
   * [game.js](# Página backend que faz a requisição Ajax e puxa as perguntas e respostas aleatoriamente do arquivo Json)
   * [questions.json](# Lista de perguntas e respostas do quiz game)
<!--te-->

# Quiz Game -- Projeto concluído


### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/) e uma extenção como o Live Server.

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone https://github.com/FilipeChavs7/ProjetoQUIZ

# Acesse a pasta do projeto no terminal/cmd
$ cd QUIZGAME

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm start

# O servidor inciará na porta:8000 - acesse <http://localhost:8000>
```
