
const {Router}= require('express');
const { getProveedor, addProveedor } = require('../controllers/proveedor.controller');

const router= Router();


router.get('',getProveedor)
router.post('',addProveedor)

module.exports=router