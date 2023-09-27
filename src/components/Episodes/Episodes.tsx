import React, {useEffect, useState} from 'react';
import {IEpisode} from "../../interfaces";
import {episodesService} from "../../services/episodesService";
import {Episode} from "./Episode/Episode";

const Episodes = () => {
    const [episodes, setEpisodes] = useState<IEpisode[]>([])

    useEffect(() => {
        episodesService.getEpisodes().then(({data}) => setEpisodes(data.results))
    }, []);

    return (
        <div>
            {episodes.map(episode => <Episode episode={episode} key={episode.id}/>)}
        </div>
    );
};

export {Episodes};