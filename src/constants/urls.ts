const baseURL = 'https://rickandmortyapi.com/api'

const characters = '/character'
const urls = {
    characters: {
        base: characters,
        byID: (id: number): string => `${characters}/${id}`
    }
}

export {
    baseURL,
    urls
}