const validarCampos = require('../middlewares/validar-campos');
const validarJWT = require('../middlewares/validar-jwt');
const validarRol = require('../middlewares/validaro-rol');


module.exports = {
    ...validarCampos,
    ...validarJWT,
    ...validarRol
}