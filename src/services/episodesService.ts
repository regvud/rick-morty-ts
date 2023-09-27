import {apiService} from "./apiService";
import {urls} from "../constants";
import {IEpisode, IEpisodesResponse} from "../interfaces";

const episodesService = {
    getEpisodes: () => apiService.get<IEpisodesResponse>(urls.episodes.base),
    byID: (id: number) => apiService.get<IEpisode>(urls.episodes.byID(id))
}

export {
    episodesService
}