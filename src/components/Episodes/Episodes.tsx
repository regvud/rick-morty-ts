import {IEpisode, IEpisodesResponse} from "../../interfaces";
import {Episode} from "./Episode/Episode";
import {useFetch} from "../../hooks/useFetch";
import {episodesService} from "../../services/episodesService";

const Episodes = () => {
    const [episodes] = useFetch<IEpisodesResponse>(episodesService.getEpisodes());
    console.log(episodes)
    return (
        <div>
            {episodes?.results.map((episode:IEpisode) => <Episode episode={episode} key={episode.id}/>)}
        </div>
    );
};

export {Episodes};