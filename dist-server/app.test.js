"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("./app"));
describe('GET /', () => {
    it('deve retornar a interface Cyberpunk', async () => {
        const res = await (0, supertest_1.default)(app_1.default).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.text).toContain('Uzi Experience');
        expect(res.headers['content-type']).toMatch(/html/);
    });
});
describe('Configuração de Produção', () => {
    it('deve servir arquivos estáticos do diretório dist', async () => {
        const res = await (0, supertest_1.default)(app_1.default).get('/assets/main.js');
        expect(res.statusCode).toBe(200);
        expect(res.headers['content-type']).toMatch(/javascript/);
    });
    it('deve retornar index.html para rotas desconhecidas', async () => {
        const res = await (0, supertest_1.default)(app_1.default).get('/rota-inexistente');
        expect(res.statusCode).toBe(200);
        expect(res.text).toContain('Uzi Experience');
    });
});
