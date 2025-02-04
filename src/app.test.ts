import request from 'supertest';
import app from './app';

describe('GET /', () => {
  it('deve retornar a interface Cyberpunk', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('Bem-vindo ao Ciberpunk Uzi Exp');
  });
}); 