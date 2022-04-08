const Rol = require('../models/rol');
const User = require('../models/users');


const isRolValid = async (rol = "") => {
    const existeRol = await Rol.findOne({ rol })
    if (!existeRol) {
        throw new Error(`el rol ${rol} no existe`)
    }
}

const existeEmail = async (correo) => {
    const existeEmail = await User.findOne({ correo: correo })
    if (existeEmail) {
        throw new Error(`El email ya se encuentra registrado`)
    }
}

const existeUsuarioPorId = async (id) => {
    const existeUsuario = await User.findById( id)
    if (!existeUsuario) {
        throw new Error(`el id ${id} no existe`)
    }
}


module.exports = {
    existeEmail,
    isRolValid,
    existeUsuarioPorId
}