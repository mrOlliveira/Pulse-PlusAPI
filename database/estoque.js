import { DataTypes } from 'sequelize';

export default (sequelize) => {
    const estoques = sequelize.define('Estoque', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        qntde: {type: DataTypes.INTEGER},
        'id-medicamento': {type: DataTypes.INTEGER},
        'id-dispenser': {type: DataTypes.INTEGER}
    })
    return estoques;
};