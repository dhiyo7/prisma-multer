const mainRoutes = require('express').Router()

const bookRoutes = require('./bookRoutes');

mainRoutes.use('/book', bookRoutes);

module.exports = mainRoutes;