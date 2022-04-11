const { Router } = require('express');
// Importar todos los routers;
const authRouter = require('./auth.js');
const Pokemons = require('./Pokemons.js')
const Types = require('./Types.js')

const router = Router();

// Configurar los routers
 router.use('/auth', authRouter);
 router.use('/Pokemons', Pokemons);
 router.use('/Types', Types);

module.exports = router;
