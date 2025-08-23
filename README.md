# 🎯 Sudoku Solver

Um solucionador de Sudoku interativo construído com ClojureScript e Shadow CLJS.

## 🚀 Demo Online

**[Jogar Sudoku Solver](https://liryanne.github.io/sudoku-solver/)**

## ✨ Funcionalidades

- 🎮 **Interface interativa** com grid visual do Sudoku
- ⌨️ **Navegação por teclado** usando as setas
- 🔢 **Entrada de números** digitando 1-9
- 🗑️ **Apagar células** com Delete, Backspace ou 0
- 🤖 **Resolução automática** usando algoritmo de backtracking
- 🎨 **Feedback visual** para diferentes tipos de células:
  - 🟢 Verde claro: números inseridos pelo usuário
  - 🔵 Azul claro: números resolvidos pelo algoritmo
  - 🔴 Vermelho: movimentos inválidos
  - 🟢 Verde escuro: célula selecionada

## 🛠️ Tecnologias

- **ClojureScript** - Linguagem funcional compilada para JavaScript
- **Shadow CLJS** - Ferramenta de build para ClojureScript
- **HTML5/CSS3** - Interface moderna e responsiva
- **GitHub Pages** - Hospedagem gratuita

## 🎮 Como Jogar

1. **Navegue** pelas células usando as setas do teclado
2. **Digite** números de 1-9 para preencher as células
3. **Apague** células com Delete, Backspace ou 0
4. **Resolva** automaticamente clicando no botão "🚀 GO"
5. **Limpe** o tabuleiro com o botão "🗑️ Clear"

## 🏗️ Desenvolvimento Local

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/liryannesn/sudoku-solver.git
cd sudoku-solver

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npx shadow-cljs watch app

# Acesse no navegador
# http://localhost:8080
```

### Build de Produção

```bash
# Gerar build otimizado
npx shadow-cljs release app
```

## 📁 Estrutura do Projeto

```
sudoku-solver/
├── src/
│   └── sudoku_solver/
│       └── core.cljs          # Lógica principal do jogo
├── public/
│   ├── index.html             # Interface HTML
│   └── js/                    # JavaScript compilado
├── shadow-cljs.edn            # Configuração Shadow CLJS
├── package.json               # Dependências Node.js
└── project.clj                # Configuração Leiningen
```

## 🧠 Algoritmo

O solucionador usa o algoritmo de **backtracking**:

1. Encontra a primeira célula vazia
2. Tenta números de 1-9
3. Verifica se o número é válido (sem conflitos na linha, coluna ou quadrante 3x3)
4. Se válido, coloca o número e continua recursivamente
5. Se não encontrar solução, volta atrás e tenta o próximo número
6. Repete até resolver completamente ou determinar que não há solução

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para detalhes.

## 👩‍💻 Autora

**Liryanne Nogueira**
- GitHub: [@liryannesn](https://github.com/liryannesn)
- Email: liryannesn@gmail.com

---

⭐ Se você gostou deste projeto, considere dar uma estrela!
