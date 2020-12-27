# Angular Cypress Sample Project

Projeto desenvolvido durante bootcamp Avanade / Digital Innovation One

## ![Angular Example App](logo.png)

## Objetivos

Utilizar Cypress para executar testes de integração. 

## Metodologia

Utilizamos um exemplo de aplicação da Real World apenas como base para implementação dos testes utilizando Cypress.

## Como Testar
As dependências da aplicação são automaticamente instaladas pelas IDEs mais comuns do mercado. Caso essa instalação automática não seja executada, é preciso realizar a instalação das dependências digitando, na pasta root do projeto:

> npm install

Para que seja possível executar a aplicação e os testes, é necessário ter o Cypress instalado.
Caso o Cypress não seja instalado na etapa anterior, podemos executar a instalação manualmente.
A instalação do Cypress pode facilmente ser realizada digitando os seguintes comandos, na pasta em que se encontra o projeto:

 > npm install cypress --save-dev
 
Para a execução dos testes, é preciso estar com a aplicação em execução.
Executar a aplicação: 

> npm run start

Para realizar a execução dos testes individualmente:

> npx cypress run --spec ".\cypress\integration\<nome_do_teste>.js"

O teste escolhido será executado e os resultados serão disponibilizados no próprio terminal usado para a execução dos testes.
O Cypress também cria um vídeo da simulação sendo executada. Este vídeo fica disponivel após cada um dos testes em:

> .\cypress\videos\<nome_do_teste>.mp4

A cada novo teste executado, o vídeo do teste anterior é apagado.
