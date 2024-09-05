import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Encontre o elemento raiz no DOM onde o React será montado
const container = document.getElementById('root');

// Crie a raiz do React com o método `createRoot`
const root = createRoot(container);

// Renderize o seu aplicativo na raiz
root.render(<App />);