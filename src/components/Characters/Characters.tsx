import {charactersService} from "../../services/charactersService";
import {ICharactersResponse} from "../../interfaces";
import {Character} from "./Character/Character";
import {useFetch} from "../../hooks/useFetch";

const Characters = () => {
    const characters = useFetch<ICharactersResponse>(charactersService.getCharacters());
    return (
        <div>
            {characters?.results.map(character => <Character character={character} key={character.id}/>)}
        </div>
    );
};

export {Characters};