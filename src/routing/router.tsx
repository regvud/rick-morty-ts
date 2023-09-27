import {createBrowserRouter} from "react-router-dom";
import {RootLayout} from "../layouts";
import {CharactersPage} from "../pages/CharactersPage";
import {CharacterDetails} from "../components/Characters";
import {EpisodesPage} from "../pages/EpisodesPage";
import {EpisodeDetails} from "../components/Episodes";

const router = createBrowserRouter([
    {
        path: '', element: <RootLayout/>, children: [
            {
                path: 'characters', element: <CharactersPage/>
            },
            {
                path: 'characters/:id', element: <CharacterDetails/>
            },
            {
                path: 'episodes', element: <EpisodesPage/>
            },
            {
                path: 'episodes/:id', element: <EpisodeDetails/>
            }

        ]
    }
])

export {
    router
}