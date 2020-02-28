import axios from "axios";
import { URL_API } from "./constants";
import { IPokemonList, IPokemonItem } from "./apiInterfaces";

export async function getPokemons(next: string, callback: (error: boolean, json: IPokemonList) => void) {
    let error: boolean = false;
    if (!next) {
         await axios.get(`${URL_API}/pokemon?offset=0&limit=20`)
            .then(result => callback(error, result.data))
            .catch(error => {
                console.log(error);
                error = true;
                callback(error, null);
            })
    } else {
        await axios.get(next)
            .then(result => callback(error, result.data))
            .catch(error => {
                console.log(error);
                error = true;
                callback(error, null);
            })
    }
}

export async function getInfoPokemon(url: string, callback: (error: boolean, json: IPokemonItem) => void) {
    let error: boolean = false;
    axios.get(url)
    .then(result => callback(error, result.data))
    .catch(error => {
        console.log(error);
        error = true;
        callback(error, null)
    })
}