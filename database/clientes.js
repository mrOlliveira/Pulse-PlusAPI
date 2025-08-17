import { DataTypes } from 'sequelize';

export default (sequelize) => {
    const clientes = sequelize.define('Clientes', {
        cpf: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        nome: {type: DataTypes.STRING},
        telefone: {type: DataTypes.STRING},
        DTnascimento: {type: DataTypes.DATEONLY},
        'id-condicao': {type: DataTypes.INTEGER}
    })
    return clientes;
};