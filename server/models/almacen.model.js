const mongoose = require('mongoose');
const { Schema } = mongoose;

const almacenSchema = new Schema({
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
        type: Date
    }],
}, {

    collection: "almacen"
});

module.exports = mongoose.model('Almacen', almacenSchema);