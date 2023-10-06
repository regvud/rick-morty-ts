const baseURL = 'https://rickandmortyapi.com/api'

const characters = '/character'
const episodes = '/episode';
const urls = {
    characters: {
        base: characters,
        byID: (id: number): string => `${characters}/${id}`,
        byMultipleIds: (ids: string[]): string => `${characters}/${ids}`
    },
    episodes: {
        base: episodes,
        byID: (id: number): string => `${episodes}/${id}`
    }
}

export {
    baseURL,
    urls
}