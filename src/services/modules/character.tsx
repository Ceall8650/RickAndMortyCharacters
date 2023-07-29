import http from 'services/http';

type AllCharactersResponse = {
  info: Object,
  results: Character[]
}

const CHARACTER = {
  async getAll(): Promise<Character[]> {
    const { results } = await http.get<any, AllCharactersResponse>('https://rickandmortyapi.com/api/character')

    return results
  }
}

export default CHARACTER
