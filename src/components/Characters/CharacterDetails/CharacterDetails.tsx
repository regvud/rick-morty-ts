import {charactersService} from "../../../services/charactersService";
import {useLocation, useParams} from "react-router-dom";
import {useFetch} from "../../../hooks/useFetch";


const CharacterDetails = () => {
    const {id} = useParams();
    const {state} = useLocation();
    const [character] = useFetch(charactersService.byID(+id));
    return (
        <div>
            <h1>{state ? state?.name : character?.name}</h1>
            <img src={state ? state?.image : character?.image} alt={character?.name}/>
            <h1>{state ? state?.status : character?.status}</h1>
        </div>
    );
};

export {CharacterDetails};