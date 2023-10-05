import {IEpisodesResponse} from "../../interfaces";
import {Episode} from "./Episode/Episode";
import {useFetch} from "../../hooks/useFetch";
import {episodesService} from "../../services/episodesService";

const Episodes = () => {
    const episodes = useFetch<IEpisodesResponse>(episodesService.getEpisodes());
    return (
        <div>
            {episodes?.results.map(episode => <Episode episode={episode} key={episode.id}/>)}
        </div>
    );
};

export {Episodes};