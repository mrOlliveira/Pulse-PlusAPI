import Sequelize from 'sequelize';
import agendaModel from './agenda.js';
import clientesModel from './clientes.js';
import condicaoModel from './condicao.js';
import dispensersModel from './dispenser.js';
import estoqueModel from './estoque.js';
import medicamentosModel from './medicamento.js';
import receitaModel from './receita.js';

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

    condicao.hasMany(cliente, { foreignKey: 'id-condicao' });
    cliente.belongsTo(condicao, { foreignKey: 'id-condicao' });

    cliente.hasMany(dispenser, { foreignKey: 'CPF-dono' });
    dispenser.belongsTo(cliente, { foreignKey: 'CPF-dono' });

    cliente.hasMany(agenda, { foreignKey: 'id-cliente' });
    agenda.belongsTo(cliente, { foreignKey: 'id-cliente' });

    cliente.hasMany(receita, { foreignKey: 'cpf-cliente' });
    receita.belongsTo(cliente, { foreignKey: 'cpf-cliente' });

    dispenser.hasMany(estoque, { foreignKey: 'id-dispenser' });
    estoque.belongsTo(dispenser, { foreignKey: 'id-dispenser' });

    dispenser.hasMany(agenda, { foreignKey: 'id-dispenser' });
    agenda.belongsTo(dispenser, { foreignKey: 'id-dispenser' });

    medicamento.hasMany(estoque, { foreignKey: 'id-medicamento' });
    estoque.belongsTo(medicamento, { foreignKey: 'id-medicamento' });

    medicamento.hasMany(agenda, { foreignKey: 'id-medicamento' });
    agenda.belongsTo(medicamento, { foreignKey: 'id-medicamento' });

    medicamento.hasMany(receita, { foreignKey: 'id-medicamento' });
    receita.belongsTo(medicamento, { foreignKey: 'id-medicamento' });

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
export {sequelize, cliente, agenda, condicao, dispenser, estoque, medicamento, receita, connect };