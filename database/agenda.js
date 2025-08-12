import { DataTypes } from 'sequelize';

export default (sequelize) => {
    const agenda = sequelize.define('Endereco', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        hLiberacao: {type: DataTypes.DATE}
    })
    return agenda;
};
