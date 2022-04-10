const validarCampos = require('./validar-campos');
const validarJWT    = require('./validar-jwt');
const validarRol    = require('./validar-rol');

module.exports = {
    validarCampos,
    validarJWT,
    ...validarRol,
}