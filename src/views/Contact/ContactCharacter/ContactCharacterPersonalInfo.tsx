import dayjs from 'dayjs';

type Props = {
  character: Character
}

function ContactCharacterPersonalInfo({ character }: Props) {
  return (
    <div className="pt-5">
      <h4 className="text-2xl mb-5">Personal Info</h4>
      <div className="grid grid-cols-2 border border-gray p-5 mb-5">
        <span>Status:</span>
        <span>{character.status}</span>
        <span>Gender:</span>
        <span>{character.gender}</span>
        <span>Species:</span>
        <span>{character.species}</span>
        <span>Location:</span>
        <address><a href={character.location.url}>{character.location.name}</a></address>
        <span>Origin:</span>
        <address><a href={character.origin.url}>{character.origin.name}</a></address>
        <span>Created Date:</span>
        <time dateTime={character.created}>{dayjs(character.created).format('YYYY/MM/DD hh:mm:ss')}</time>
      </div>
      <h4 className="text-2xl pb-5">Episode</h4>
    </div>
  )
}

export default ContactCharacterPersonalInfo
