# 🎯 Sudoku Solver

An interactive Sudoku puzzle solver built with ClojureScript, featuring a clean interface and automatic solving capabilities using backtracking algorithms.

### What are Backtracking Algorithms?
**Backtracking** is a problem-solving strategy that works like exploring a maze: try a path, and if it leads to a dead end, go back to the last decision point and try a different route. In Sudoku, this means placing a number in a cell, checking if it's valid, and if it creates an unsolvable situation later, the algorithm "backtracks" - removes that number and tries the next one. This systematic trial-and-error approach guarantees finding a solution if one exists, or proving that no solution is possible.

## 🧠 Algorithm

1. Find the first empty cell
2. Try numbers 1-9 in sequence
3. Check if the number is valid (no conflicts in row, column, or 3x3 box)
4. If valid, place the number and recursively solve the rest
5. If no solution found, backtrack and try the next number
6. Repeat until the puzzle is completely solved or determined unsolvable

## 🚀 Live Demo

**[Play Sudoku Solver](https://liryanne.github.io/sudoku-solver/)**

## 🎮 How to Play

1. **Navigate**: Use arrow keys or click to select cells
2. **Input Numbers**: Type 1-9 to fill cells
3. **Clear Cells**: Press Delete, Backspace, or 0 to clear
4. **Auto Solve**: Click "🚀 GO" to let the algorithm solve the puzzle
5. **Reset**: Click "🗑️ Clear" to start over

## 🛠️ Technology Stack

- **ClojureScript**: Functional programming language that compiles to JavaScript
- **Shadow CLJS**: Modern ClojureScript build tool and development environment
- **HTML5/CSS3**: Clean, responsive user interface
- **GitHub Actions**: Automated build and deployment pipeline
- **GitHub Pages**: Free hosting for the live application

## 🏗️ Local Development

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Setup
```bash
# Clone the repository
git clone https://github.com/liryanne/sudoku-solver.git
cd sudoku-solver

# Install dependencies
npm install

# Start development server
npx shadow-cljs watch app

# Open in browser
# http://localhost:8080
```

## 📁 Project Structure

```
sudoku-solver/
├── src/sudoku_solver/core.cljs    # Main game logic and algorithms
├── index.html                     # User interface and styling
├── .github/workflows/deploy.yml   # Automated deployment
├── shadow-cljs.edn                # Build configuration
└── package.json                   # Dependencies
```

## 🤖 AI Development

**This entire project was developed using AI assistance**, showcasing the capabilities of modern AI in software development:

- **Code Generation**
- **Architecture Design**
- **Problem Solving**
- **UI/UX Design**
- **DevOps Setup**
- **Documentation**

This demonstrates how AI can be a powerful pair programming partner, helping to create complete, functional applications while learning and applying best practices.
