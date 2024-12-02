


const {Router} = require('express');
const { getProducts, createProduct } = require('../controllers/producto.controller');



const router = Router();


router.get('',getProducts);
router.post('',createProduct)



module.exports=router