# GlobalMicrosservice-Tests

Bem vindo(a) ao repositório de testes da aplicação da GlobalSolution.

# Integrantes

- Bruno Henrique Ferraz da Silva - RM 87740
- João Henrique Pinto - RM 86913
- João Pedro Meirelles - RM 84775
  

# Instruções para rodar os testes
Para rodar o teste de performance, entre na pasta de teste (no caso "cargas") e rode esse comando:

$ K6 run script.js

Teste simulando 100 acessos durante 5 minutos:

<img width="480" alt="image" src="https://github.com/Bruninho20/GlobalMicrosservice-Tests/assets/99261881/2deee7b8-d9ec-488f-8abb-281941e4abd4">

Para rodar o teste de integração, entre na pasta de teste (no caso "integracao") e rode este comando:

$ npm run test


Teste do endpoint /objetivos:

<img width="541" alt="image" src="https://github.com/Bruninho20/GlobalMicrosservice-Tests/assets/99261881/a7223900-8c50-4ee2-a3de-731b46d96d76">


Teste do endpoint /indicador/{indicadorKey}

<img width="652" alt="image" src="https://github.com/Bruninho20/GlobalMicrosservice-Tests/assets/99261881/44408d72-2cbc-4dd8-9c16-159350d82951">

Pronto, os testes foram efetuados com sucesso!

