import React, {useEffect, useState} from 'react';
import {rickMortyService} from "../services/rickMortyService";

const CharactersPage = () => {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        rickMortyService.getCharacters().then(({data}) => setCharacters(data.results))
    }, []);

    console.log(characters)
    return (
        <div>
            CharactersPage
        </div>
    );
};

export {CharactersPage};