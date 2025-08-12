import { DataTypes } from 'sequelize';

export default (sequelize) => {
    const estoques = sequelize.define('Endereco', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        qntde: {type: DataTypes.INTEGER}
    })
    return estoques;
};
