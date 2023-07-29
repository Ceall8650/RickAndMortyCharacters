import http from 'services/http';

type AllEpisodesResponse = {
  info: Object,
  results: Episode[],
}

const EPISODE = {
  async getAll(): Promise<Episode[]> {
    const { results } = await http.get<any, AllEpisodesResponse>('https://rickandmortyapi.com/api/episode')

    return results
  }
}

export default EPISODE
