import {createBrowserRouter} from "react-router-dom";
import {RootLayout} from "../layouts";
import {CharactersPage} from "../pages/CharactersPage";
import {CharacterDetails} from "../components/Characters";

const router = createBrowserRouter([
    {
        path: '', element: <RootLayout/>, children: [
            {
                path: 'characters', element: <CharactersPage/>
            },
            {
                path: 'characters/:id', element: <CharacterDetails/>
            }
        ]
    }
])

export {
    router
}