const express = require('express');
const router = express.Router();

const estoqueController = require('../controllers/estoqueController');

router.get('/',estoqueController.indexView);
router.get('/criar_conta',estoqueController.CriarContaView);
router.post('/cadastrar_Usuario',estoqueController.cadastrarUsuario);


module.exports = router;