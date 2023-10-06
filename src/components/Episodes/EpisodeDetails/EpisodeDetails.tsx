import {useParams} from "react-router-dom";
import {episodesService} from "../../../services/episodesService";
import {ICharacter, IEpisode} from "../../../interfaces";
import {useFetch} from "../../../hooks/useFetch";
import {charactersService} from "../../../services/charactersService";

const EpisodeDetails = () => {
    const {id} = useParams();

    const episode = useFetch<IEpisode>(episodesService.byID(+id));
    const ids = episode?.characters.join('/').split('/').filter(value => parseInt(value));
    const characters = useFetch<ICharacter[]>(charactersService.getMultipleCharacters(ids));


    console.log(characters)

    return (
        <div>
            {/*<h2>id: {episode?.id}</h2>*/}
            {/*<h2>episode: {episode?.episode}</h2>*/}
            {/*<h2>name: {episode?.name}</h2>*/}
            {/*<h2>created: {episode?.created}</h2>*/}
            {/*<h2>air_date: {episode?.air_date}</h2>*/}
            {/*<h2>url: {episode?.url}</h2>*/}
            {/*<h2>characters: {episode?.characters}</h2>*/}
        </div>
    )
};

export {EpisodeDetails};