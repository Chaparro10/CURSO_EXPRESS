

const modelProveedor= require('../models/proveedor.model')


const getProveedor=async (req,res)=>{
    try {
        const response= await modelProveedor.findAll();
        res.status(200).json({
            ok:true,
            data:response
        })
    } catch (error) {
        console.log("error",error)
        res.status(501).json({
            ok:false,
            message: "Error al obtener proveedor"
        })
    }
}

const addProveedor=async (req,res)=>{
        if(Object.keys(req.body).length==0){
            res.status(404).json({
                ok:false,
                message: "No se recibieron datos"
            })
        }
    try {
        const response= await modelProveedor.create(req.body);
        res.status(200).json({
            ok:true,
            message:'Proveedor creado con exito'
        })
    } catch (error) {
        res.status(501).json({
            ok:false,
            message: "Error al agregar proveedor"
        })
    }
}


module.exports={
    getProveedor,
    addProveedor
}