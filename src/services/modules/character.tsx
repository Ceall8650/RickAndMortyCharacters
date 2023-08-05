import http from 'services/http';

type Info = {
  next: string
}

type AllCharactersHttpResponse = {
  info: Info,
  results: Character[]
}

type AllCharactersResponse = {
  info: Info,
  characters: Character[]
}

const CHARACTER = {
  async getAll(url: string): Promise<AllCharactersResponse> {
    const { info, results } = await http.get<any, AllCharactersHttpResponse>(url)

    return {
      characters: results,
      info, 
    }
  },

  async get(id:string): Promise<Character> {
   return http.get<any, Character>(`https://rickandmortyapi.com/api/character/${id}`)
  }
}

export default CHARACTER
