import { DataTypes } from 'sequelize';

export default (sequelize) => {
    const condicao = sequelize.define('Endereco', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {type: DataTypes.STRING}
    })
    return condicao;
};
