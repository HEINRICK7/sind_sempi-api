const express = require('express');

const authMiddleware = require('./middlewares/auth');

const routes = express.Router();

const Register_FiliacaoController = require('./controllers/Register_FiliacaoController/index');
//const ProfileController = require('./controllers/ProfileController');
//const SessionController = require('./controllers/SessionController');



routes.post('/register_filiacao',authMiddleware,  Register_FiliacaoController.store);
routes.get('/register_filiacao',authMiddleware, Register_FiliacaoController.index);
routes.get('/register_filiacao/:userId',authMiddleware, Register_FiliacaoController.show);
routes.put('/register_filiacao/:userId',authMiddleware, Register_FiliacaoController.update);
routes.delete('/register_filiacao/:userId',authMiddleware, Register_FiliacaoController.destroy);

//routes.get('/results', ResultController.index);
//routes.delete('/results/:id', ResultController.destroy);
//
//routes.get('/profile', ProfileController.index);
//
//routes.post('/session', SessionController.store);

module.exports = app => app.use(routes);