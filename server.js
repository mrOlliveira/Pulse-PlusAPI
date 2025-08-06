import express from 'express';
import {connect} from './database';


const app = express();

const PORT = 3000;

app.use(express.json());

connect();

app.use('/clientes', cliente);
app.use('/enderecos', endereco);

app.get('/', (req, res) => {
    res.send.json('API de Clientes e Endereços');
});

app.listen(PORT, () => {
    console.log(`Servidor está rodando em: http://localhost:${PORT}`);
});
