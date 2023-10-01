import React, {FC} from 'react';
import {IEpisode} from "../../../interfaces";
import {useNavigate} from "react-router-dom";

interface Props {
    episode: IEpisode
}

const Episode: FC<Props> = ({episode}) => {
    const navigate = useNavigate();
    const toDetails = () => {
        navigate(`${episode.id}`, {state: episode})
    };
    return (
        <div>
            <hr/>
            <h2>{episode.id}</h2>
            <h2>{episode.name}</h2>
            <h2>{episode.created}</h2>
            <button onClick={toDetails}>details</button>
        </div>
    );
};

export {Episode};