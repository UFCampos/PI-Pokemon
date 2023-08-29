/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Pokemon, conn } = require('../../src/db.js');

const agent = session(app);
const pokemon = {
  name: 'Pikachu',
  hp: 45,
  attack: 55,
  defense: 40,
};

describe('Pokemon routes', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  beforeEach(() => Pokemon.sync({ force: true })
    .then(() => Pokemon.create(pokemon)));
  
  describe('GET /pokemons', () => {
    it('should get 200', () =>
      agent.get('/pokemons').expect(200)
    );
    
    it('should get a specific pokemon by name', () =>
      agent.get('/pokemons?name=Pikachu')
        .expect(200)
        .then((res) => {
          expect(res.body.name).to.equal('Pikachu');
        })
    );
    
    it('should return 404 for a non-existent pokemon name', () =>
      agent.get('/pokemons?name=NonExistent')
        .expect(404)
    );
  });
  
  describe('POST /pokemons', () => {
    it('should create a new pokemon', () =>
      agent.post('/pokemons')
        .send({
          name: 'Charmander',
          hp: 39,
          attack: 52,
          defense: 43,
        })
        .expect(201)
        .then((res) => {
          expect(res.body.message).to.equal(`The new pokemon Charmander has been created successfully`);
        })
    );
    
    it('should return 400 for an invalid pokemon creation', () =>
      agent.post('/pokemons')
        .send({
          hp: 39,
          attack: 52,
          defense: 43,
        })
        .expect(400)
    );
  });
  
  describe('GET /pokemons/:id', () => {
    it('should get a specific pokemon by ID', () =>
      agent.get('/pokemons/1')
        .expect(200)
        .then((res) => {
          expect(res.body.id).to.equal(1);
        })
    );
    
    it('should return 404 for a non-existent pokemon ID', () =>
      agent.get('/pokemons/1500')
        .expect(404)
    );
  });
});
