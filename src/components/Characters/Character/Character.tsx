import React, {FC} from 'react';
import {ICharacter} from "../../../interfaces";
import {useNavigate} from "react-router-dom";

interface Props {
    character: ICharacter
}

const Character: FC<Props> = ({character}) => {
    const navigate = useNavigate();
    const toDetails = () => {
        navigate(`${character.id}`)
    }


    return (
        <div>
            <hr/>
            <h3>{character.id}</h3>
            <h3>{character.name}</h3>
            <img src={character.image} alt={character.name}/>
            <h3>{character.status}</h3>
            <button onClick={toDetails}>details</button>
        </div>
    );
};

export {Character};