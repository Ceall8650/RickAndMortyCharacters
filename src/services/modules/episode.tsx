import http from 'services/http';

const EPISODE = {
  async get(url: string): Promise<Episode> {
    return http.get<any, Episode>(url)
  }
}

export default EPISODE
