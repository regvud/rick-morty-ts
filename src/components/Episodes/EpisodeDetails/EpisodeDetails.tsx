import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {episodesService} from "../../../services/episodesService";
import {IEpisode} from "../../../interfaces";

const EpisodeDetails = () => {
    const [episode, setEpisode] = useState<IEpisode>(null)
    const {state} = useLocation();
    const {id} = useParams();

    useEffect(() => {
        if (!state) {
            episodesService.byID(+id).then(({data}) => setEpisode(data))
        }
    }, [id]);

    return (
        <div>
            <h2>{state ? state?.id : episode?.id}</h2>
            <h2>{state ? state?.episode : episode?.episode}</h2>
            <h2>{state ? state?.name : episode?.name}</h2>
            <h2>{state ? state?.created : episode?.created}</h2>
            <h2>{state ? state?.characters : episode?.characters}</h2>
            <h2>{state ? state?.air_date : episode?.air_date}</h2>
            <h2>{state ? state?.url : episode?.url}</h2>
        </div>
    );
};

export {EpisodeDetails};