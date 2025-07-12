#!/usr/bin/env node
import express from 'express';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

interface Processo {
  id: number;
  cliente: string;
  descricao: string;
  status: string;
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataPath = process.env.PROCESS_FILE || path.join(__dirname, 'processos.json');

async function loadProcessos(): Promise<Processo[]> {
  try {
    const data = await fs.readFile(dataPath, 'utf-8');
    return JSON.parse(data) as Processo[];
  } catch {
    return [];
  }
}

const app = express();
const port = process.env.PORT || 3000;

app.get('/processos', async (_req, res) => {
  const processos = await loadProcessos();
  res.json(processos);
});

app.get('/processos/:id', async (req, res) => {
  const processos = await loadProcessos();
  const id = Number(req.params.id);
  const processo = processos.find(p => p.id === id);
  if (processo) {
    res.json(processo);
  } else {
    res.status(404).json({ erro: 'Processo n\u00e3o encontrado' });
  }
});

app.listen(port, () => {
  console.log(`Servidor Souto Costa rodando na porta ${port}`);
});
