import { DataTypes } from 'sequelize';

export default (sequelize) => {
    const medicamento = sequelize.define('Endereco', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {type: DataTypes.STRING},
        preco: {type: DataTypes.INTEGER}
    })
    return medicamento;
};
