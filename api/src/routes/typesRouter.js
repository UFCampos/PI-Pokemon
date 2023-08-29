const { Router } = require('express');

const getTypes = require('../handlers/types.js');    

const typesRouter = Router();

typesRouter.get('/', getTypes)

module.exports = typesRouter