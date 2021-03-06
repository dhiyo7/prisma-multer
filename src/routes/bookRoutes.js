const bookRoutes = require('express').Router()
const bookControllers = require('../controllers/bookControllers');
const uploadMiddleware = require('../helpers/uploadMiddleware');

bookRoutes.get('/', bookControllers.getAllBooks);
bookRoutes.get('/pagination', bookControllers.paginationBooks);
bookRoutes.post('/', uploadMiddleware, bookControllers.postBook);

module.exports = bookRoutes;