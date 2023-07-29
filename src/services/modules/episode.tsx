import http from 'services/http';

const EPISODE = {
  async get(id: string): Promise<Episode> {
    return http.get<any, Episode>(`https://rickandmortyapi.com/api/episode/${id}`)
  }
}

export default EPISODE
