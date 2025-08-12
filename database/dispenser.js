import { DataTypes } from 'sequelize';

export default (sequelize) => {
    const dispensers = sequelize.define('Endereco', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        DTaqui: {type: DataTypes.DATE}
    })
    return dispensers;
};
