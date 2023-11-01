
import axios from 'axios';
import { pokemon } from '../interfaces';


export const getPokemons = async( pokemonId: number): Promise<pokemon> => {
    const resp = await axios.get<pokemon>(`https://pokeapi.co/api/v2/pokemon/${ pokemonId }`);
    // console.log( resp.data );
    return resp.data;
}


