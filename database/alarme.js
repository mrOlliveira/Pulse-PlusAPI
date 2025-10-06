import { DataTypes } from 'sequelize';

export default (sequelize) => {
    const alarme = sequelize.define('Alarme', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {type: DataTypes.STRING},
        hora: {type: DataTypes.TIME},
        ativo: {type: DataTypes.BOOLEAN},
        'id-medicamento': {type: DataTypes.INTEGER},
        'cpf-cliente': {type: DataTypes.STRING}
    })
    return alarme;
};