<!--START_SECTION:header-->
<div align="center">
  <p align="center">
    <img 
      alt="QR Code" 
      src="https://github.com/NatyAnalytcs-1/Projeto-QRcode/blob/main/projeto-qrcode/src/services/password/utils/QR_Code.png" 
      width="100px" 
    />
    <h1>Gerador de QRcode para e-commerce</h1>
  </p>
</div>
<!--END_SECTION:header-->

## 💻 Sobre o Projeto
Construir um kit de utilidades para um e-commerce, o projeto deve ser escalável para ter adição de novas features.


## 📚 Habilidades e Níveis de Conhecimento
- Lógica de programação
- Javascript | Básico
- NodeJS | Básico
- Node Modules
- NPM, Packages, Dependencies
- Variáveis ambiente (.env)

## 🛠️ Habilidades e Sub-habilidades neste conteúdo
- Como gerar qrcode com node
- Como lidar com várias dependências de um projeto
- Como pensar em projetos por camadas

## 🎯 Objetivos e Resultados
- Criar projetos nodejs que gerem multiplas dependências


# Resumo Node.js

- **npm**: é o gerenciador de pacotes do Node.js que ajuda a gerenciar pacotes JavaScript.
- **Package (Pacote)**:  são as funcionalidades empacotadas.
Em linguagem de programação é um conjunto de arquivos e recursos que encapsulam funcionalidades relacionadas para serem compartilhadas e reutilizadas em projetos de software. ´Podem conter bibliotecas, módulos, classes, funções ou outros componentes que oferecem funcionalidades específicas para serem integradas.
- **Dependência**: seu código fica dependente do pacote/biblioteca, e o gerenciador de pacotes cuida do empacotamento e atualizações.
- **Dev dependency**: são dependências usadas apenas no ambiente de desenvolvimento.
- Além do npm, existem outros gerenciadores como yarn e pnpm.
- Pacotes não são obrigatórios - você pode implementar funcionalidades com suas próprias funções, mas os pacotes são mais práticos por já estarem prontos.

## Principais comandos npm:

- **npm init**: inicia um novo projeto Node.js e cria o arquivo package.json
- **npm install [pacote]**: instala um pacote (--save para dependência de produção, --save-dev para dependência de desenvolvimento)
- **npm uninstall [pacote]**: remove um pacote instalado
- **npm update [pacote]**: atualiza um pacote para a versão mais recente
- **npm fund**: mostra informações sobre os pacotes que você está usando

# NPM Scripsts

```
NPM Scripts são comandos personalizados definidos no arquivo package.json que permitem automatizar tarefas comuns em projetos Node.js. Eles funcionam como atalhos para comandos mais complexos, facilitando operações como iniciar o servidor, executar testes, compilar código ou realizar deploy. Os scripts são executados usando o comando `npm run [nome-do-script]` e são uma ferramenta essencial para otimizar o fluxo de trabalho de desenvolvimento.
```

## Manipulando variáveis ambiente para Isolar dados sensíveis

### O que são variáveis de ambiente?

São valores externos ao código que podem ser acessados pela aplicação durante sua execução. Elas existem no ambiente onde o programa roda, não no código em si.

### Importância no Node.js

- **Configuração:** Permitem configurar aplicações sem alterar o código-fonte.
- **Segurança:** Mantêm informações sensíveis (senhas, chaves API) fora do código e repositórios.
- **Flexibilidade:** Facilitam a execução da mesma aplicação em diferentes ambientes (desenvolvimento, teste, produção).

### Como usar em Node.js

Para acessar variáveis de ambiente no Node.js, use o objeto `process.env`:

```
// Acessando uma variável de ambiente
const apiKey = process.env.API_KEY;
console.log(`Usando a chave: ${apiKey}`);

```

## 🔧 Ferramentas populares

- **dotenv:** Pacote que carrega variáveis de ambiente de um arquivo .env para process.env.
- **cross-env:** Permite definir variáveis de ambiente de forma consistente em diferentes plataformas.

## ✔ Boas práticas

- Nunca comitar arquivos .env no controle de versão
- Incluir um arquivo .env.example com a estrutura, mas sem valores reais
- Usar nomes claros e descritivos para as variáveis
- Validar a existência de variáveis obrigatórias ao iniciar a aplicação







## 🗂️ Estrutura dos Arquivos
```

projeto-qrcode/
├── src/                                                 # Arquivo principal
│   ├── .env                                             # Arquivo de variáveis de ambiente (ex: configurações de senha)
│   ├── index.js                                         # Código-fonte principal que inicia a aplicação
│   ├── prompts/                                         # Definições dos prompts de entrada do usuário
│   │   ├── prompt-main.js                               # Pergunta principal: QR Code ou senha
│   │   └── prompt-qrcode.js                             # Perguntas específicas para gerar QR Code
│   └── services/                                        # Funcionalidades do sistema
│       ├── password/                                    # Lógica relacionada à geração de senhas
│       │   ├── create.js                                # Função principal que cria a senha
│       │   ├── handle.js                                # Controla e executa a lógica de senha com base nas variáveis do .env
│       │   └── utils/
│       │       ├── QR_Code.png                          # Imagem resultado para README
│       │       ├── image (1).png                        # Imagem resultado para README
│       │       ├── image.png                            # Imagem resultado para README
│       │       └── permitted-characters.js              # Define quais caracteres são permitidos na senha
│       └── qr-code/                                     # Lógica relacionada à geração de QR Code
│           ├── create.js                                # Gera o QR Code com base nas respostas do usuário
│           └── handle.js                                # Controla e executa do QR Code com base nas variáveis do .env
├── .gitignore                                           # Define arquivos/pastas ignorados pelo Git ├── node_modules/# Dependências instaladas via npm
├── package.json                                         # Configurações e dependências do projeto
└── package-lock.json                                    # Arquivo gerado automaticamente para manter consistência nas instalações

```


### Resultado - 1
![QR Code](https://github.com/NatyAnalytcs-1/Projeto-QRcode/blob/main/projeto-qrcode/src/services/password/utils/image.png)

### Resultado - 2
![Password](https://github.com/NatyAnalytcs-1/Projeto-QRcode/blob/main/projeto-qrcode/src/services/password/utils/image%20(1).png)


🧠 Feito com café ☕ por Naty
