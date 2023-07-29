import dayjs from "dayjs";

type Props = {
	episode: Episode;
};

function ContactCharacterEpisode({ episode }: Props) {
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
				<tr>
					<td>{episode.name}</td>
					<td>{dayjs(episode.air_date).format("YYYY/MM/DD")}</td>
					<td>{episode.episode}</td>
					<td>{dayjs(episode.created).format("YYYY/MM/DD hh:mm:ss")}</td>
				</tr>
			</tbody>
		</table>
	);
}

export default ContactCharacterEpisode;
