import React, {useEffect, useState} from 'react';
import {rickMortyService} from "../../../services/rickMortyService";
import {useParams} from "react-router-dom";
import {ICharacter} from "../../../interfaces";


const CharacterDetails = () => {
    const {id} = useParams();
    const [character, setCharacter] = useState<ICharacter>()

    useEffect(() => {
        if (id) {
            rickMortyService.byID(+id).then(({data}) => setCharacter(data))
        }
    }, []);

    console.log('details')

    return (
        <>
            {character &&
                <div>

                    <h1>{character.name}</h1>
                    <img src={character.image} alt={character.name}/>
                    <h1>{character.status}</h1>
                </div>
            }
        </>
    );
};

export {CharacterDetails};