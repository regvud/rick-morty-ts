import {useLocation, useParams} from "react-router-dom";
import {episodesService} from "../../../services/episodesService";
import {IEpisode} from "../../../interfaces";
import {useFetch} from "../../../hooks/useFetch";

const EpisodeDetails = () => {
    const {state} = useLocation();
    const {id} = useParams();

    const episode = useFetch<IEpisode>(episodesService.byID(+id));
    console.log('render')

    // const [fetchIds, setFetchIds] = useState<string[]>([])
    // useEffect(() => {
    //     episode?.characters.map(value => {
    //         const lastIndex = value.lastIndexOf('/')
    //         setFetchIds(prevState => [...prevState, value.slice(lastIndex + 1, value.length)])
    //     })
    // }, [episode]);

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
};

export {EpisodeDetails};