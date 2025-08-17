import { DataTypes } from 'sequelize';

export default (sequelize) => {
    const medicamento = sequelize.define('Medicamento', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {type: DataTypes.STRING},
        preco: {type: DataTypes.INTEGER},
        formato: {type: DataTypes.STRING},
        'dose-padrao': {type: DataTypes.INTEGER},
        'bula-medica': {type: DataTypes.STRING}
        
    })
    return medicamento;
};