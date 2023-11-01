import { classPokemon } from "./decorators/classPokemon";






const charmander = new classPokemon('Charmander');

// (classPokemon.prototype as any).customName = 'Pikachu';

// console.log( charmander.savePokemonToDb( 50 ) );
charmander.publicApi = 'Jose';
console.log( charmander );









