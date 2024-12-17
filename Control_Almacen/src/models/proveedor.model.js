const { DataTypes } = require("sequelize");
const { bdMysl } = require("../database");



const modelProveedor=bdMysl.define('PROVEEDORES',{
    id:{    
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    status:{
        type:DataTypes.TINYINT,
        allowNull:false,
        defaultValue:1
    }
},
{
    timestamps: true,
    tableName:'PROVEEDORES'

})

module.exports=modelProveedor