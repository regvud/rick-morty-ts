import React, {useEffect, useState} from 'react';
import {charactersService} from "../../../services/charactersService";
import {useLocation, useParams} from "react-router-dom";
import {ICharacter} from "../../../interfaces";


const CharacterDetails = () => {
    const {id} = useParams();
    const [character, setCharacter] = useState<ICharacter>()
    const {state} = useLocation();

    useEffect(() => {
        if (!state) {
            charactersService.byID(+id).then(({data}) => setCharacter(data))
        }
    }, [state, id]);

    // console.log('state ' + JSON.stringify(state));
    // console.log('character ' + JSON.stringify(character))
    return (
        <div>
            <h1>{state ? state?.name : character?.name}</h1>
            <img src={state ? state?.image : character?.image} alt={character?.name}/>
            <h1>{state ? state?.status : character?.status}</h1>
        </div>
    );
};

export {CharacterDetails};