Markdown

# EduStream - Plataforma de Aprendizado Online

Este é o front-end da aplicação EduStream, desenvolvido com React, TypeScript, Vite e Tailwind CSS.

## 📋 Pré-requisitos

Antes de começar, você precisa ter o **Node.js** instalado em sua máquina.
* [Baixar Node.js](https://nodejs.org/) (Recomendado versão LTS v18 ou superior).

Para verificar se já tem instalado, abra o terminal (CMD ou PowerShell) e digite:
```bash
node -v
npm -v
🚀 Como executar o projeto (Passo a Passo)
Siga os passos abaixo no seu terminal (CMD, PowerShell ou Terminal do VS Code):

1. Navegue até a pasta do projeto
Se você baixou o arquivo ZIP, extraia-o. No terminal, use o comando cd para entrar na pasta:

Bash

cd caminho/para/a/pasta/EduStream
2. Instale as dependências
Este projeto utiliza o npm (ou bun) para gerenciar pacotes. Execute o comando abaixo para baixar todas as bibliotecas necessárias (listadas no package.json):

Bash

npm install
Isso criará uma pasta chamada node_modules.

3. Inicie o Servidor de Desenvolvimento
Para rodar a aplicação localmente, execute:

Bash

npm run dev
4. Acesse no Navegador
Após rodar o comando acima, o terminal mostrará que o servidor está rodando. Abra seu navegador e acesse o seguinte endereço (configurado no vite.config.ts):

👉 http://localhost:8080

🛠️ Scripts Disponíveis
No arquivo package.json, os seguintes comandos estão disponíveis:

npm run dev: Inicia o servidor de desenvolvimento (modo local).

npm run build: Cria a versão otimizada para produção na pasta dist.

npm run preview: Visualiza localmente a versão de produção gerada pelo build.

npm run lint: Verifica o código em busca de erros de sintaxe ou estilo (ESLint).

📂 Estrutura do Projeto
src/: Contém todo o código fonte.

components/: Componentes reutilizáveis (Botões, Cards, Navbar, etc).

pages/: As telas da aplicação (Dashboard, Cursos, Perfil, etc).

context/: Gerenciamento de estado global (ex: SidebarContext).

hooks/: Lógicas reutilizáveis (ex: use-toast).

public/: Arquivos estáticos (imagens, ícones).

ℹ️ Observações
Este projeto utiliza o Bun (bun.lockb) e NPM (package-lock.json). Você pode usar bun install e bun dev se tiver o Bun instalado, mas as instruções acima focam no NPM por ser mais comum.

A aplicação é atualmente Client-Side Only (apenas Front-end), conforme detalhado na documentação técnica.