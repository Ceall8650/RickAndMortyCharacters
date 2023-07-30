import qs from 'qs';
import http from 'services/http';

type AllCharactersResponse = {
  info: Object,
  results: Character[]
}
type Query = {
  name?: string,
  status?: string,
  species?: string,
  type?: string,
  gender?: string,
}

const CHARACTER = {
  async getAll(query?: Query): Promise<Character[]> {
    const queryString = qs.stringify({
      name: query?.name,
      status: query?.status,
      species: query?.species,
      type: query?.type,
      gender: query?.gender,
    })
    const endPoint = 'https://rickandmortyapi.com/api/character'
    const fullPath = queryString ? `${endPoint}?${queryString}` : endPoint
    const { results } = await http.get<any, AllCharactersResponse>(fullPath)

    return results
  },

  async get(id:string): Promise<Character> {
   return http.get<any, Character>(`https://rickandmortyapi.com/api/character/${id}`)
  }
}

export default CHARACTER
