const express = require('express');
const app = express();


app.use('/tienda', require('./tienda/tienda'));
app.use('/venta', require('./tienda/venta'));
app.use('/persona', require('./persona/persona'));
app.use('/producto', require('./producto/producto'));
app.use('/proveedor', require('./proveedor/proveedor'));
app.use('/inventario', require('./tienda/inventario'));
app.use('/almacen', require('./proveedor/almacen'));

module.exports = app;