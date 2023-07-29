import ContactBookCharacter from './ContactBookCharacter';

type Props = {
  characters: Character[]
}

function ContactBookCharacterList({ characters }: Props) {
  function handleClick(e:React.MouseEvent) {
    e.stopPropagation();
  }

  return (
    <div className="h-full overflow-auto">
      {
        characters.map((character, index) => (
          <ContactBookCharacter
            key={character.id}
            character={character}
            className={`
              hover:cursor-pointer
              hover:bg-blue-100
              ${index !== characters.length-1 ? 'border-b border-gray-300' : ''}
            `}
            onClick={handleClick}
          />
        ))
      }
    </div>
  )
}

export default ContactBookCharacterList
