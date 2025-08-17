import { DataTypes } from 'sequelize';

export default (sequelize) => {
    const condicao = sequelize.define('Condicao', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {type: DataTypes.STRING},
        descricao: {type: DataTypes.STRING}
    })
    return condicao;
};