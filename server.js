import express from 'express';
import { connect, cliente, agenda, condicao, dispenser, estoque, medicamento, receita, alarme } from './database/index.js';
import clienteroutes from './routes/clienteroutes.js';
import enderecoroutes from './routes/enderecoroutes.js';
import cors from 'cors';

const app = express();
const PORT = 3000;

// CORS liberado para todas as origens (em desenvolvimento)
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.use(express.json());

// Conecta ao banco
connect();

// Rotas existentes
app.use('/', clienteroutes);
app.use('/', enderecoroutes);

// Rota inicial
app.get('/', (req, res) => {
    res.json('API PULSE+ - Sistema de Gerenciamento de Medicamentos');
});

// 🔥 ROTAS DOS ALARMES 🔥

// GET /api/alarmes - Buscar todos os alarmes
app.get('/api/alarmes', async (req, res) => {
    try {
        const alarmes = await alarme.findAll({
            include: [medicamento]
        });
        res.json(alarmes);
    } catch (error) {
        console.error('Erro ao buscar alarmes:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// POST /api/alarmes - Criar novo alarme
app.post('/api/alarmes', async (req, res) => {
    try {
        const { nome, hora, dosagem, dias, ativo, 'id-medicamento': idMedicamento, 'cpf-cliente': cpfCliente } = req.body;
        
        const novoAlarme = await alarme.create({
            nome: nome || 'Medicamento',
            hora: hora || '08:00',
            dosagem: dosagem || '500mg',
            dias: dias || '1,2,3,4,5',
            ativo: ativo !== undefined ? ativo : true,
            'id-medicamento': idMedicamento || 1,
            'cpf-cliente': cpfCliente || '123.456.789-00'
        });
        
        res.status(201).json(novoAlarme);
    } catch (error) {
        console.error('Erro ao criar alarme:', error);
        res.status(500).json({ error: 'Erro ao criar alarme' });
    }
});

// PUT /api/alarmes/:id - Atualizar alarme
app.put('/api/alarmes/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await alarme.update(req.body, { 
            where: { id } 
        });
        
        const alarmeAtualizado = await alarme.findByPk(id);
        res.json(alarmeAtualizado);
    } catch (error) {
        console.error('Erro ao atualizar alarme:', error);
        res.status(500).json({ error: 'Erro ao atualizar alarme' });
    }
});

// DELETE /api/alarmes/:id - Deletar alarme
app.delete('/api/alarmes/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await alarme.destroy({ 
            where: { id } 
        });
        res.json({ message: 'Alarme deletado com sucesso' });
    } catch (error) {
        console.error('Erro ao deletar alarme:', error);
        res.status(500).json({ error: 'Erro ao deletar alarme' });
    }
});

// 🔥 ROTAS DOS MEDICAMENTOS 🔥
app.get('/api/medicamentos', async (req, res) => {
    try {
        const medicamentos = await medicamento.findAll({
            attributes: ['id', 'nome', 'formato', 'dose-padrao']
        });
        res.json(medicamentos);
    } catch (error) {
        console.error('Erro ao buscar medicamentos:', error);
        res.status(500).json({ error: 'Erro ao buscar medicamentos' });
    }
});

// 🔥 ROTA PUT PARA MEDICAMENTOS - Alimentar o banco
app.put('/api/medicamentos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, preco, formato, 'dose-padrao': dosePadrao, 'bula-medica': bulaMedica } = req.body;
        
        await medicamento.update({
            nome: nome,
            preco: preco,
            formato: formato,
            'dose-padrao': dosePadrao,
            'bula-medica': bulaMedica
        }, { 
            where: { id } 
        });
        
        const medicamentoAtualizado = await medicamento.findByPk(id);
        res.json(medicamentoAtualizado);
    } catch (error) {
        console.error('Erro ao atualizar medicamento:', error);
        res.status(500).json({ error: 'Erro ao atualizar medicamento' });
    }
});

// 🔥 ROTA POST PARA MEDICAMENTOS - Criar novos
app.post('/api/medicamentos', async (req, res) => {
    try {
        const { nome, preco, formato, 'dose-padrao': dosePadrao, 'bula-medica': bulaMedica } = req.body;
        
        const novoMedicamento = await medicamento.create({
            nome: nome || 'Medicamento',
            preco: preco || 0,
            formato: formato || '500mg',
            'dose-padrao': dosePadrao || 1,
            'bula-medica': bulaMedica || 'Bula padrão'
        });
        
        res.status(201).json(novoMedicamento);
    } catch (error) {
        console.error('Erro ao criar medicamento:', error);
        res.status(500).json({ error: 'Erro ao criar medicamento' });
    }
});

// 🔥 ROTA GET PARA UM MEDICAMENTO ESPECÍFICO
app.get('/api/medicamentos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const medicamentoEncontrado = await medicamento.findByPk(id);
        
        if (!medicamentoEncontrado) {
            return res.status(404).json({ error: 'Medicamento não encontrado' });
        }
        
        res.json(medicamentoEncontrado);
    } catch (error) {
        console.error('Erro ao buscar medicamento:', error);
        res.status(500).json({ error: 'Erro ao buscar medicamento' });
    }
});

// Inicia o servidor
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Servidor rodando em: http://localhost:${PORT}`);
    console.log(`📱 Acessível pelo celular em: http://192.168.1.146:${PORT}`);
    console.log(`🌐 CORS habilitado para todas as origens`);
});