import {createBrowserRouter} from "react-router-dom";
import {RootLayout} from "../layouts";
import {CharactersPage} from "../pages/CharactersPage";

const router = createBrowserRouter([
    {
        path: '', element: <RootLayout/>, children: [
            {
                path: '/characters', element: <CharactersPage/>
            }
        ]
    }
])

export {
    router
}