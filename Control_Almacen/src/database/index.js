const { Sequelize } = require('sequelize');




const bdMysl = new Sequelize(process.env.DATABASE, process.env.USER_DB, process.env.PASSWORD, {
    host: process.env.HOST_DB,
    dialect: 'mysql'
});


const BdMysql = async () => {
    try {
        await bdMysl.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}


module.exports = {
    BdMysql,
    bdMysl
}