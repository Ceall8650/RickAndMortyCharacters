import ContactBookCharacter from './ContactBookCharacter';

type Props = {
  characters: Character[]
}

function ContactBookCharacterList({ characters }: Props) {
  return (
    <div className="h-full overflow-auto">
      {
        characters.map((character, index) => (
          <ContactBookCharacter
            key={character.id}
            character={character}
            className={index !== characters.length-1 ? 'border-b border-gray-300' : ''}
          />
        ))
      }
    </div>
  )
}

export default ContactBookCharacterList
