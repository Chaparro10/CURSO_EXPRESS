


const {Router} = require('express');
const { GetCliente, GetClienteById, updateCliente, createCliente } = require('../controllers/cliente.controller');
const validateToken = require('../middleware/Validate-Token');


const router = Router();


router.get('',validateToken,GetCliente);
router.get('/:id',GetClienteById)
router.patch('/:id',updateCliente);
router.post('',createCliente)


module.exports=router