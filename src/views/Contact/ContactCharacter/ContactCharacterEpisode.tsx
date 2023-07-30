import { useCallback, useEffect, useState } from 'react';
import SERVICES from 'services';
import dayjs from "dayjs";

type Props = {
	episodeUrls: string[];
};

function ContactCharacterEpisode({ episodeUrls }: Props) {
	const [episodes, setEpisodes] = useState<Episode[]>([])

	useEffect(() => {
		async function init() {
			const promises = episodeUrls.map(episodeUrl => SERVICES.EPISODE.get(episodeUrl))
			const episodes = await Promise.all(promises);
	
			setEpisodes(episodes)
		}
		init()
	}, [episodeUrls])

	return (
		<table className="text-left">
			<thead>
				<tr>
					<th>Name</th>
					<th>Air Date</th>
					<th>Episode</th>
					<th>Created Date</th>
				</tr>
			</thead>
			<tbody>
				{
					episodes.map(episode => (
						<tr key={episode.id}>
							<td>{episode.name}</td>
							<td>{dayjs(episode.air_date).format("YYYY/MM/DD")}</td>
							<td>{episode.episode}</td>
							<td>{dayjs(episode.created).format("YYYY/MM/DD hh:mm:ss")}</td>
						</tr>
					))
				}
			</tbody>
		</table>
	);
}

export default ContactCharacterEpisode;
