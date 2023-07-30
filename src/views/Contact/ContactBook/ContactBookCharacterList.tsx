import SERVICES from 'services';
import { useState, useRef, useEffect, useCallback } from 'react';
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
  const [filteredCharacters, setFilteredCharacters] = useState<Character[]>([])
  const [characterAmount, setCharacterAmount] = useState(0)

  const characterListRef = useRef<HTMLDivElement|null>(null)
  const CHARACTER_CARD_HEIGHT = 135

  const getCharacters = useCallback(async() => {
      const characters = await SERVICES.CHARACTER.getAll(filter);
  
      setCharacters(characters)
  }, [filter])

  useEffect(() => {
    getCharacters()
  }, [getCharacters])

  useEffect(() => {
    if(!Object.keys(filter).length) {
      setFilteredCharacters(characters)

      return
    }

    const filteredCharacters = characters.filter(character => {
      return (!filter.keyword || character.name.toLowerCase().includes(filter.keyword.toLowerCase()) )
        && (!filter.status || character.status === filter.status)
        && (!filter.gender || character.gender === filter.gender)
    })

    setFilteredCharacters(filteredCharacters)
  }, [filter, characters])

  useEffect(() => {
    if (characterListRef.current) {
      const maxCharacterAmountOnView = Math.ceil(characterListRef.current.offsetHeight / CHARACTER_CARD_HEIGHT)

      setCharacterAmount(maxCharacterAmountOnView)
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
        itemCount={filteredCharacters.length}
        itemData={filteredCharacters}
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
                className={`
                  hover:cursor-pointer
                  hover:bg-blue-100
                  ${index !== characters.length-1 ? 'border-b border-gray-300' : ''}
                `}
                onClick={(e: React.MouseEvent) => e.stopPropagation()}
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
