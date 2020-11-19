import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('postgres://postgres:postgres@postgres:5432/engsoft');
sequelize.sync()

export default sequelize