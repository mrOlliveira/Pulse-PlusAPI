import { DataTypes } from 'sequelize';

export default (sequelize) => {
    const agenda = sequelize.define('Agenda', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        hLiberacao: {type: DataTypes.DATE},
        dose: {type: DataTypes.INTEGER},
        resposta: {type: DataTypes.STRING},
        'id-medicamento': {type: DataTypes.INTEGER},
        'id-dispenser': {type: DataTypes.INTEGER},
        'id-cliente': {type: DataTypes.STRING},
        'DT-liber': {type: DataTypes.DATE},
        'DT-tomada': {type: DataTypes.DATE}
    })
    return agenda;
};