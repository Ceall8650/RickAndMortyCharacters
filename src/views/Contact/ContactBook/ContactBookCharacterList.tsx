import SERVICES from 'services';
import { useState, useRef, useEffect } from 'react';
import { FixedSizeList as List } from "react-window";
import ContactBookCharacter from './ContactBookCharacter';

type ContactBookCharacterListProps = {
  filter: Filter
}
type Props = ContactBookCharacterListProps & React.HTMLAttributes<HTMLDivElement>

function ContactBookCharacterList({ filter }: Props) {
  const [characterCardListWidth, setCharacterCardListWidth] = useState(450)
  const [characterCardListHeight, setCharacterCardListHeight] = useState(900)
  const [characters, setCharacters] = useState<Character[]>([])

  const characterListRef = useRef<HTMLDivElement|null>(null)
  const CHARACTER_CARD_HEIGHT = 135

  useEffect(() => {
    async function getCharacters() {
      const characters = await SERVICES.CHARACTER.getAll(filter);
  
      setCharacters(characters)
    }
    getCharacters()
  }, [filter])

  useEffect(() => {
    if (characterListRef.current) {
      setCharacterCardListWidth(characterListRef.current.clientWidth);
      setCharacterCardListHeight(characterListRef.current.offsetHeight);
    }
  }, [characterListRef]);


  return (
    <div ref={characterListRef} className='h-full overflow-auto'>
      <List
        width={characterCardListWidth}
        height={characterCardListHeight}
        itemSize={CHARACTER_CARD_HEIGHT}
        itemCount={characters.length}
        itemData={characters}
      >
        {
          ({index, style}) => {
            const character = characters[index]

            return (
              (
                <ContactBookCharacter
                style={style}
                key={character.id}
                character={character}
                className={`hover:cursor-pointer hover:bg-blue-100 ${index !== characters.length-1 ? 'border-b border-gray-300' : ''}`}
              />
              )
            )
          }
        }
      </List>
    </div>
  )
}

export default ContactBookCharacterList
