import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {episodesService} from "../../../services/episodesService";
import {IEpisode} from "../../../interfaces";

const EpisodeDetails = () => {
    const [episode, setEpisode] = useState<IEpisode>(null)
    const {state} = useLocation();
    const {id} = useParams();

    if (!state) {
        episodesService.byID(+id).then(({data}) => setEpisode(data))
    }


    // const [fetchIds, setFetchIds] = useState<string[]>([])
    // useEffect(() => {
    //     episode?.characters.map(value => {
    //         const lastIndex = value.lastIndexOf('/')
    //         setFetchIds(prevState => [...prevState, value.slice(lastIndex + 1, value.length)])
    //     })
    // }, [episode]);
    console.log(episode?.characters)
    return (
        <div>
            <h2>id: {state ? state.id : episode?.id}</h2>
            <h2>episode: {state ? state.episode : episode?.episode}</h2>
            <h2>name: {state ? state.name : episode?.name}</h2>
            <h2>created: {state ? state.created : episode?.created}</h2>
            <h2>air_date: {state ? state.air_date : episode?.air_date}</h2>
            <h2>url: {state ? state.url : episode?.url}</h2>
        </div>
    )
        ;
};

export {EpisodeDetails};