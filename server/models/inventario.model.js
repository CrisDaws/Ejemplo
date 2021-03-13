const mongoose = require('mongoose');
const { Schema } = mongoose;

const inventarioSchema = new Schema({
    idProducto: {
        type: mongoose.Types.ObjectId,
        ref: 'producto',
        required: [true, 'Favor de insertar el valor unico del producto.']
    },
    nmbCantidad: {
        type: String,
        required: [true, 'Favor de insertar la cantidad del inventario.']
    },
    strCategoria: {
        type: String,
        required: [true, 'Favor de insertar el nombre de categoria.']
    },
    arrFechaIngreso: [{
            type: Date,
            required: [true, 'Favor de ingresar la fecha.']
    }],
    blnActivo: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    },
    collection: "inventario"
});

module.exports = mongoose.model('Inventario', inventarioSchema);