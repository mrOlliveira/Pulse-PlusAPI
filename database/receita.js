import { DataTypes } from 'sequelize';

export default (sequelize) => {
    const receita = sequelize.define('Receita', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        iniciotrat:{type: DataTypes.STRING},
        terminotrat:{type: DataTypes.STRING},
        ted:{type: DataTypes.STRING},
        QTDE: {type: DataTypes.INTEGER},
        'id-medicamento': {type: DataTypes.INTEGER},
        'cpf-cliente': {type: DataTypes.STRING}
    })
    return receita;
};