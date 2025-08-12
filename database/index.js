import Sequelize from 'sequelize';
import agendaModel from './agenda.js';
import clientesModel from './clientes.js';
import condicaoModel from './condicao.js';
import dispensersModel from './dispenser.js';
import estoqueModel from './estoque.js';
import medicamentosModel from './medicamento.js';
import receitaModel from './receita.js';
import agenda from './agenda.js';

    const sequelize = new Sequelize({
        dialect : 'sqlite',
        storage : './database/database.sqlite'
    });
    
    const agenda = agendaModel(sequelize);
    const cliente = clientesModel(sequelize);
    const condicao = condicaoModel(sequelize);
    const dispenser = dispensersModel(sequelize);
    const estoque = estoqueModel(sequelize);
    const medicamento = medicamentosModel(sequelize);
    const receita = receitaModel(sequelize);

    estoque.hasOne(medicamento, { foreignKey: 'id-medicamento'});
    medicamento.belongsTo(estoque, {foreignKey: 'id-medicamento'});

    estoque.hasOne(dispenser, {foreignKey: 'id-dispenser'});
    dispenser.belongsTo(estoque, {foreignKey: 'id-dispenser'});

    agenda.hasOne(medicamento, {foreignKey: 'id-medicamento'});
    medicamento.belongsTo(agenda, {foreignKey: 'id-medicamento'});

    agenda.hasOne(dispenser, {foreignKey: 'id-dispenser'});
    dispenser.belongsTo(agenda, {foreignKey: 'id-dispenser'});

    agenda.hasOne(cliente, {foreignKey: 'id-cliente'});
    cliente.belongsTo(agenda, {foreignKey: 'id-cliente'});

const connect = async () =>  {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        console.log('Conexão com o banco de dados foi bem sucedida.');
    }
    catch (error) {
        console.error('Não foi possível conectar ao banco de dados:', error);
    };
};
export {sequelize, cliente, endereco, connect };

