const mongoose = require('mongoose');
const { Schema } = mongoose;

const personaSchema = new Schema({
    Nombre: {
        type: String,
        required: [true, 'Favor de insertar el nombre.']
    },
    Apellidos: {
        type: String,
        required: [true, 'Favor de insertar los apellidos.']
    },
    Direccion: {
        type: String,
        required: [true, 'Favor de insertar la direccion.']
    },
    Edad: {
        type: Number,
        required: [true, 'Favor de insertar la edad.']
    },
    Telefonos: Number,
    Curp: {
        type: String,
        require: [true, 'Favor de insertar curp.']
    },
    Pais: {
        type: String,
        require: [true, 'Favor de insertar pais.']
    },
    strCorreo: {
        type: String,
        require: [true, 'Favor de insertar el correo.']
    }
})

module.exports = mongoose.model('Persona', personaSchema);