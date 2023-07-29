type ContactBookCharacterProps = {
  character: Character;
};

type Props = ContactBookCharacterProps & React.HTMLAttributes<HTMLDivElement>

function ContactBookCharacter({ 
  character,
  className,
}: Props) {
  return (
    <div className={`py-4 px-4 flex items-center ${className}`}>
      <img
        src={character.image}
        alt="Avatar"
        width="100" 
        height="100"
        className="rounded-full mr-6"
      />
      <div className="flex flex-col">
        <span className="mb-2">{character.name}</span>
        <span>{character.species}</span>
      </div>
    </div>
  );
}

export default ContactBookCharacter;
