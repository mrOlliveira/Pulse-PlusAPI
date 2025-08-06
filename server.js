import express from 'express';
import {connect} from './database';
import clienteroutes from './routes/clienteroutes';
import enderecoroutes from './routes/enderecoroutes';


const app = express();

const PORT = 3000;

app.use(express.json());

connect();

app.use('/', clienteroutes);
app.use('/', enderecoroutes);

app.get('/', (req, res) => {
    res.send.json('API de Clientes e Endereços');
});

app.listen(PORT, () => {
    console.log(`Servidor está rodando em: http://localhost:${PORT}`);
});
