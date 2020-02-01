const {Router} = require('express');
const DevController = require('./controllers/devController')
const  SearchcController = require('./controllers/SearchController')
const routes = new Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.get('/search', SearchcController.index);

module.exports = routes;