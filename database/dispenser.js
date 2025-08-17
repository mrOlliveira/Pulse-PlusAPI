import { DataTypes } from 'sequelize';

export default (sequelize) => {
    const dispensers = sequelize.define('Dispenser', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        DTaqui: {type: DataTypes.DATE},
        nome: {type: DataTypes.STRING},
        conectado: {type: DataTypes.BOOLEAN},
        'CPF-dono': {type: DataTypes.STRING}
    })
    return dispensers;
};