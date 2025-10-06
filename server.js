import express from 'express';
import {connect} from './database/index.js';
import clienteroutes from './routes/clienteroutes.js';
import enderecoroutes from './routes/enderecoroutes.js';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors({
    origin: 'http://127.0.0.1:3001',
}));
app.use(express.json());

connect();

app.use('/', clienteroutes);
app.use('/', enderecoroutes);

app.get('/', (req, res) => {
    res.json('API de Clientes e Endereços');
});

app.listen(PORT, () => {
    console.log(`Servidor está rodando em: http://localhost:${PORT}`);
});

app.get('/api/alarmes', async (req, res) => {
    try {
      const alarmes = await alarme.findAll({
        include: [medicamento] // Inclui dados do medicamento se necessário
      });
      res.json(alarmes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // POST /api/alarmes - Criar novo alarme
  app.post('/api/alarmes', async (req, res) => {
    try {
      const novoAlarme = await alarme.create(req.body);
      res.status(201).json(novoAlarme);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // PUT /api/alarmes/:id - Atualizar alarme
  app.put('/api/alarmes/:id', async (req, res) => {
    try {
      await alarme.update(req.body, { where: { id: req.params.id } });
      res.json({ message: 'Alarme atualizado com sucesso' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // DELETE /api/alarmes/:id - Deletar alarme
  app.delete('/api/alarmes/:id', async (req, res) => {
    try {
      await alarme.destroy({ where: { id: req.params.id } });
      res.json({ message: 'Alarme deletado com sucesso' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });   
