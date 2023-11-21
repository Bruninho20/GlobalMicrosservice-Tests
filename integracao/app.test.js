const request = require('supertest');
const app = require('./app');

describe('Testes de integração para os endpoints', () => {
  it('Deve retornar mensagem de funcionamento para rota raiz', async () => {
    const response = await request("http://localhost:8080").get('/objetivos');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  it('Deve retornar um array de objetivos com indicadores', async () => {
    const response = await request("http://localhost:8080").get('/objetivos');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);

    expect(response.body[0].id).toBeDefined();
    expect(response.body[0].objetivos).toBeDefined();
    expect(response.body[0].indicadores).toBeDefined();
  });

});

describe('Teste de integração para o endpoint com indicadorKey', () => {
    it('Deve retornar dados do indicador correspondente ao indicadorKey fornecido', async () => {
      const indicadorKey = '3.1.1';
      const response = await request("http://localhost:8080")
        .get(`/indicador/${indicadorKey}`); 
  
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);

      expect(response.body[0].ano).toBeDefined();
      expect(response.body[0].consumo).toBeDefined();
    });
  
  });
  
