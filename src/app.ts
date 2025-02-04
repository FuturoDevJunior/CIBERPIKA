import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middlewares de segurança e logging
app.use(compression());
app.use(helmet({
  contentSecurityPolicy: {
    useDefaults: false,
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
      fontSrc: ["'self'", 'https://fonts.gstatic.com', 'https://cdnjs.cloudflare.com'],
      imgSrc: ["'self'", 'data:']
    }
  }
}));
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, '../public')));

// Rota principal - serve o index.html da interface Cyberpunk
app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Rota API - retorna o status do servidor
app.get('/api/status', (req: Request, res: Response) => {
  res.json({
    status: 'Ciberpik online',
    timestamp: new Date().toISOString()
  });
});

// Middleware para tratamento de erros
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).json({ error: 'Erro interno do servidor' });
});

/* Assinatura Oculta:
0x44 0x65 0x76 0x46 0x65 0x72 0x72 0x65 0x69 0x72 0x61 0x47
*/

// Inicia o servidor se não estivermos em ambiente de teste
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });
}

declare module 'compression' {
  interface CompressionOptions {
    level?: number;
    memLevel?: number;
  }
}

export default app; 