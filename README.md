# Cyberpunk Uzi Experience

Uma experiência full stack que reúne uma interface visual futurística, imersiva e premium, com um backend robusto que demonstra as habilidades de um Full Stack Developer Junior. Inspirado na energia de LIL UZI, o projeto entrega uma vivência interativa com animações neon, gradientes dinâmicos e um player de áudio único, inspirado em designs vetorizados como os do Apple Music e Spotify.

## Visão Geral

O projeto oferece:

- **Interface Imersiva e Futurista:** Página inicial com animações neon, gradientes dinâmicos e um *player* de áudio premium, proporcionando uma experiência multisensorial.
- **Backend Robusto com Express e TypeScript:** Servidor configurado com práticas de segurança, logging e uma API para consulta de status.
- **Testes Automatizados:** Testes implementados com Jest, ts-jest e Supertest para garantir a integridade do sistema.
- **Deploy Flexível:** Estrutura preparada para hospedar o frontend via GitHub Pages e o backend em plataformas como Heroku, Vercel ou Render.

## Tecnologias Utilizadas

- **Backend:** Node.js, Express, TypeScript, dotenv, helmet, morgan, compression.
- **Testes:** Jest, ts-jest, Supertest.
- **Frontend:** HTML5, CSS3, JavaScript.
- **Controle de Versão:** Git

## Estrutura do Projeto

```text
CIBERPIK/
├── src/
│   ├── app.ts         # Servidor Express
│   └── app.test.ts    # Testes unitários com Jest e Supertest
├── public/
│   ├── index.html     # Interface da aplicação com efeitos neon e player premium
│   └── 20.webm        # Arquivo de áudio (coloque-o na pasta public)
├── package.json       # Dependências e scripts do projeto
├── tsconfig.json      # Configurações do TypeScript
└── README.md          # Documentação do projeto
```

## Scripts NPM

- **Instalação:** `npm install`
- **Build:** `npm run build` (compila o projeto TypeScript para JavaScript)
- **Start:** `npm start` (inicia o servidor compilado)
- **Desenvolvimento:** `npm run dev` (executa o servidor com ts-node)
- **Testes:** `npm test`

## Como Rodar o Projeto

1. **Clonando o Repositório:**

   ```sh
   git clone https://github.com/SeuUsuario/NomeDoProjeto.git
   cd NomeDoProjeto
   ```

1. **Instalando Dependências:**

   ```sh
   npm install
   ```

1. **Compilando e Executando o Servidor:**

   ```sh
   npm run build
   npm start
   ```

   Para desenvolvimento:

   ```sh
   npm run dev
   ```

1. **Executando os Testes:**

   ```sh
   npm test
   ```

## Deploy

- **Frontend:** Hospede o conteúdo da pasta `/public` no [GitHub Pages](https://pages.github.com/).
- **Backend:** Utilize serviços como [Heroku](https://www.heroku.com/), [Vercel](https://vercel.com/) ou [Render](https://render.com/) para implantar o servidor Node.js.

## Personalização

- **Áudio:** Para alterar o áudio de fundo, substitua o arquivo `20.webm` na pasta **public**.
- **Interface:** Ajuste os estilos conforme sua identidade visual.

## Contribuição

Contribuições são bem-vindas! Envie issues ou pull requests para sugerir melhorias e correções.

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

## Contato

- **FerreiraDevG**
- [GitHub](https://github.com/FerreiraDevG)

---

Explore, divirta-se e crie experiências inesquecíveis!
