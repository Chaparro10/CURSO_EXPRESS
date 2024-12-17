const { DataTypes } = require("sequelize")
const { bdMysl } = require("../database")





const modelEntrada= bdMysl.define('ENTRADAS',{

    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    idProducto:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    idProveedor:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    cantidad:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    costo:{
        type:DataTypes.DECIMAL(10,2),
        allowNull:false
    }

},{
    timestamps: true,
    tableName:'ENTRADAS'
})


module.exports=modelEntrada