const {Router} = require('express')
const createPkmn = require('../controllers/createPkmn')
const getPokemons = require('../controllers/getPokemons.js')
const getCharById = require('../controllers/getCharById')
const getCharByName = require('../controllers/getCharByName.js')


const pokemonsRouter = Router();

pokemonsRouter.get('/', async (req, res) => {
    try {
        if(req.query.name){
            const pokemon = await getCharByName(req)
            return res.status(200).json(pokemon)
        }
        const pokemons = await getPokemons()
        res.status(200).json(pokemons)
    } catch (error) {
        res.status(404).send(error.message)
        
    }
})

pokemonsRouter.post('/', async (req, res) => {
    try {
        await createPkmn(req, res)
        res.status(200).json({ message: 'El nuevo pokemon ha sido creado correctamente' })
    } catch (error) {
        res.status(500).send(error.message)
    }
})

pokemonsRouter.get('/:id', async (req, res) => {
    try {
        const pokemon = await getCharById(req, res)
        res.status(200).json(pokemon)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

module.exports = pokemonsRouter