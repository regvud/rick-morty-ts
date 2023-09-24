import {apiService} from "./apiService";
import {urls} from "../constants";
import {ICharactersResponse} from "../interfaces";

const rickMortyService = {
    getCharacters: () => apiService.get<ICharactersResponse>(urls.characters.base)
}

export {
    rickMortyService
}