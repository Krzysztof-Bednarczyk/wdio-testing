import { StatusCodes } from 'http-status-codes';
import axios from 'axios';
import { expect } from 'chai';

describe('When calling Pokemon API', () => {

    const URL = 'https://pokeapi.co/api/v2/pokemon';

    it(' You get success http response', () => {
        axios.get(URL).then((response) => {
            expect(response.status).to.equal(StatusCodes.OK);
        });
    });

    it(' You receive 1118 pokemons', () => {
        const expectedCount = 1118;
        axios.get(URL).then((response) => {
            expect(response.body.count).to.equal(expectedCount);
        });

    });

    it(' You receive 20 pokemons in results array', () => {
        const expectedPokemons = 20;
        axios.get(URL).then((response) => {
            expect(response.body.results.length).to.equal(expectedPokemons);
        });

    });

    it(' Bulbasaur is in the results array', () => {
        const expectedPokemon = 'bulbasaur';
        axios.get(URL).then((response) => {
            const pokemonNames = response.body.results.map((pokemon) => pokemon.name);
            expect(pokemonNames).to.contain(expectedPokemon);
        });

    });

});
