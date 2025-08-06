import express from 'express';
import { endereco, cliente } from '../database/index.js';

const router = express.Router();



router.post('/clientes/:clienteID/endereco', async (req, res) => {
    try {
        const novoEndereco = await endereco.create({
            id: req.body.id,
            logradouro: req.body.logradouro,
            numero: req.body.numero,
            CEP: req.body.CEP,
            municipio: req.body.municipio,
            uf: req.body.uf,
            clienteID: req.params.clienteID
        });
        res.status(201).json(novoCliente); 
    } catch (error) {
        console.log(`Erro ao criar cliente: ${error}`);
        res.status(400).json({ error: 'Falha ao criar cliente' }); 
    }
});

router.get('/', async (req, res) => {
    try {
        const clientes = await cliente.findAll(); 
        res.json(clientes);
    } catch (error) {
        console.log(`Erro ao buscar clientes: ${error}`);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

router.get ('/:id', async (req, res) => {
    try {
        const cliente = await cliente.findByPk(req.params.id);
        if (!cliente) {
            return res.status(404).json({ error: 'Cliente não encontrado' });
        }
        res.json(cliente);
    }catch (error) {
        console.log(`Erro ao buscar cliente: ${error}`);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});


router.put('/:id', async (req, res) => {
    try {
        const [updated] = await cliente.update(req.body, {
            where: { id: req.params.id }
        });
        
        if (updated) {
            const clienteAtualizado = await cliente.findByPk(req.params.id);
            res.json(clienteAtualizado);
        } else {
            res.status(404).json({ error: 'Cliente não encontrado' });
        }
    } catch (error) {
        console.log(`Erro ao atualizar cliente: ${error}`);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deleted = await cliente.destroy({
            where: { id: req.params.id }
        });
        
        if (deleted) {
            res.status(204).end(); 
        } else {
            res.status(404).json({ error: 'Cliente não encontrado' });
        }
    } catch (error) {
        console.log(`Erro ao deletar cliente: ${error}`);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

export default router;