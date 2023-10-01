import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {episodesService} from "../../../services/episodesService";
import {IEpisode} from "../../../interfaces";

const EpisodeDetails = () => {
    const [episode, setEpisode] = useState<IEpisode>(null)
    const [fetchIds, setFetchIds] = useState<string[]>([])
    const {state} = useLocation();
    const {id} = useParams();

    useEffect(() => {
        if (!state) {
            episodesService.byID(+id).then(({data}) => setEpisode(data))
        } else {
            setEpisode(state)
        }
    }, [id]);

    useEffect(() => {
        episode?.characters.map(value => {
            const lastIndex = value.lastIndexOf('/')
            setFetchIds(prevState => [...prevState, value.slice(lastIndex + 1, value.length)])
        })
    }, [episode]);

    return (
        <div>
            <h2>{episode?.id}</h2>
            <h2>{episode?.episode}</h2>
            <h2>{episode?.name}</h2>
            <h2>{episode?.created}</h2>
            <h2>{episode?.air_date}</h2>
            <h2>{episode?.url}</h2>
        </div>
    )
        ;
};

export {EpisodeDetails};