const { DataTypes } = require("sequelize");
const { bdMysl } = require("../database");




const modelCliente=bdMysl.define('CLIENTES',
    {
            id:{
                type:DataTypes.INTEGER,
                primaryKey:true,
                autoIncrement:true
            },
            name:{
                type:DataTypes.STRING,
                allowNull:false

            },
            status:{
                type:DataTypes.TINYINT,
                defaultValue:1
            }
    },
    {
       timestamps: true,
       tableName:'CLIENTES'
    }
)


module.exports=modelCliente;
