


const modelEntrada= require('../models/entrada.model');


const getEntradas=async (req, res)=>{
    try {
        const response = await modelEntrada.findAll();
        res.status(200).json({
            ok:true,
            message:"Datos obtenidos correctamente",
            data:response
        })
    } catch (error) {
        res.status(501).json({
            ok:false,
            message:"Ocurrio un error durante la obtencion de los datos"
        })
    }
}

module.exports={
    getEntradas
}