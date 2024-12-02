

const modelProduct = require('../models/producto.model');
const modelDetailProduct = require('../models/detalle-producto.model');
const { bdMysl } = require('../database');

/**
 * Retrieves all products from the database.
 * 
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const getProducts = async (req, res) => {
    try {
        const response = await modelProduct.findAll();
        res.json(response);
    } catch (error) {
        res.status(501).json({
            ok: false,
            message: error.message
        });
    }
};

/**
 * Creates a new product and its corresponding detail in the database.
 * 
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const createProduct = async (req, res) => {
    const transaction = await bdMysl.transaction();
    const data = req.body;

    try {
        const product = await modelProduct.create(data, { transaction });

        const productDetail = await modelDetailProduct.create({
            logo: data.detalleProducto.log2,
            count: data.detalleProducto.count,
            Unidad: data.detalleProducto.Unidad,
            price: data.detalleProducto.price,
            idProveedor: data.detalleProducto.idProveedor,
            idProducto: product.id,
            idEstatus: data.detalleProducto.idEstatus,
        }, { transaction });


        await transaction.commit();

        res.status(200).json({
            ok: true,
            message: "Product created successfully",
            data: [product, productDetail]
        });

       
    } catch (error) {
        await transaction.rollback();
        res.status(501).json({
            ok: false,
            message: error.message
        });
    }
};

module.exports={
    getProducts,
    createProduct
}