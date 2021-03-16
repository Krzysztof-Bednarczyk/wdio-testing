import { StatusCodes } from 'http-status-codes';
import axios from 'axios';
import { expect } from 'chai';
import schema from './resources/schema.json';
// eslint-disable-next-line import/order
import { validate } from 'jsonschema';

describe('When calling Pokemon API', () => {

    const URL = 'https://pokeapi.co/api/v2/pokemon';

    it(' You get success http response', async () => {
        const response = await axios.get(URL);
        expect(response.status).to.equal(StatusCodes.OK);
    });

    it(' You receive 1118 pokemons', async () => {
        const expectedCount = 1118;
        const response = await axios.get(URL);
        expect(response.data.count).to.equal(expectedCount);
    });

    it(' You receive 20 pokemons in results array', async () => {
        const expectedPokemons = 20;
        const response = await axios.get(URL);
        expect(response.data.results.length).to.equal(expectedPokemons);
    });

    it(' Bulbasaur is in the results array', async () => {
        const expectedPokemon = 'bulbasaur';
        const response = await axios.get(URL);
        const pokemonNames = response.data.results.map((pokemon) => pokemon.name);
        expect(pokemonNames).to.contain(expectedPokemon);
    });

    it(' response passes schema validation', async () => {
        const response = await axios.get(URL);
        const validationObject = validate(response.data, schema);
        const validationResult = validationObject.valid;
        // eslint-disable-next-line no-unused-expressions
        expect(validationResult).to.be.true;
    });

});
