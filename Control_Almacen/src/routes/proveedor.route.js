
const {Router}= require('express');
const { getProveedor, addProveedor, deleteProveedor, updateProveedor } = require('../controllers/proveedor.controller');

const router= Router();


router.get('',getProveedor)
router.post('',addProveedor)
router.delete('/:id',deleteProveedor)//Recibiendo por params
router.patch('/:id',updateProveedor)

module.exports=router