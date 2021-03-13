const mongoose = require('mongoose');
const { Schema } = mongoose;

const productoSchema = new Schema({
    Nombre: {
        type: String,
        required: [true, 'Favor de insertar el nombre.']
    },
    Descripcion: {
        type: String,
        required: [true, 'Favor de insertar los apellidos.']
    },

}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    },
    collection: "producto"
});
module.exports = mongoose.model('Producto', productoSchema);