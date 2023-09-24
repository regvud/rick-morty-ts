import React, {useEffect, useState} from 'react';
import {rickMortyService} from "../../services/rickMortyService";
import {ICharacter} from "../../interfaces";
import {Character} from "./Character/Character";

const Characters = () => {
    const [characters, setCharacters] = useState<ICharacter[]>([])

    useEffect(() => {
        rickMortyService.getCharacters().then(({data}) => setCharacters(data.results))
    }, []);


    return (
        <div>
            {characters.map(character => <Character character={character} key={character.id}/>)}
        </div>
    );
};

export {Characters};