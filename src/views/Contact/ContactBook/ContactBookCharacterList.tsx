import SERVICES from 'services';
import { useState, useEffect, useMemo } from 'react';
import ContactBookCharacter from './ContactBookCharacter';

type ContactBookCharacterListProps = {
  filter: Filter
}
type Props = ContactBookCharacterListProps & React.HTMLAttributes<HTMLDivElement>

function ContactBookCharacterList({ filter }: Props) {
  const [nextPageApi, setNextPageApi] = useState('https://rickandmortyapi.com/api/character')
  const [pageInfo, setPageInfo] = useState<CharacterPageInfo|null>(null)
  const [fetchedCharacters, setFetchedCharacters] = useState<Character[]>([])
  const [characters, setCharacters] = useState<Character[]>([])
  const [filteredCharacters, setFilteredCharacters] = useState<Character[]>([])

  const intersectionObserver = useMemo(() => {
    const options = {
      root: document.querySelector('#characterListContainer'),
      rootMargin: '0px',
      threshold: 0
    }

    return new IntersectionObserver((entries) => {
      if(entries[0].isIntersecting) {
        if(pageInfo) {
          setNextPageApi(pageInfo.next)
        }
        console.log("The item enters the viewpoint");
      }
    }, options)
  }, [pageInfo])

  useEffect(() => {
    const lastCharacterId = filteredCharacters[filteredCharacters.length-1]?.id

    if(lastCharacterId) {
      const lastCharacterElement = document.querySelector(`#character_${lastCharacterId}`) as Element

      intersectionObserver.observe(lastCharacterElement)
    }
  }, [filteredCharacters, intersectionObserver]);

  useEffect(() => {
    async function getCharacters() {
      const { info, characters } = await SERVICES.CHARACTER.getAll(nextPageApi);
  
      setFetchedCharacters(characters)
      setPageInfo(info)
    }
    getCharacters()
  }, [nextPageApi])

  useEffect(() => {
    setCharacters(prev => {
      return [...prev, ...fetchedCharacters]
    })
  }, [fetchedCharacters])

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

  return (
    <div id="characterListContainer" className='h-full overflow-auto'>
        {
          filteredCharacters.map((character, index) => (
            <ContactBookCharacter
                id={`character_${character.id}`}
                key={character.id}
                character={character}
                className={`hover:cursor-pointer hover:bg-blue-100 ${index !== filteredCharacters.length-1 ? 'border-b border-gray-300' : ''}`}
              />
          ))
        }
    </div>
  )
}

export default ContactBookCharacterList
