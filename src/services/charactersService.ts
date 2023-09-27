import {apiService} from "./apiService";
import {urls} from "../constants";
import {ICharacter, ICharactersResponse} from "../interfaces";

const charactersService = {
    getCharacters: () => apiService.get<ICharactersResponse>(urls.characters.base),
    byID: (id: number) => apiService.get<ICharacter>(urls.characters.byID(id))
}

export {
    charactersService
}