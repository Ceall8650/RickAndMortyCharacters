import { useState, useEffect } from 'react';
import SERVICES from 'services';
import ContactBookSearch from './ContactBookSearch';
import ContactBookCharacterList from './ContactBookCharacterList';

type Props = React.HTMLAttributes<HTMLDivElement>

function ContactBook({ className, ...props }: Props) {
  const [characters, setCharacters] = useState<Character[]>([])
  const [filteredCharacters, setFilteredCharacters] = useState<Character[]>([])
  const [filter, setFilter] = useState({
    keyword: '',
    status: '',
    gender: ''
  })

  async function init() {
    const characters = await SERVICES.CHARACTER.getAll();

    setCharacters(characters)
  }

  useEffect(() => {
    init()
  }, [])

  useEffect(() => {
    if(!filter.keyword && !filter.status && !filter.gender) {
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
    <div 
      className={`flex flex-col overflow-hidden ${className}`}
      {...props}
    >
      <ContactBookSearch 
        className=" border-b border-gray-300"
        setFilter={setFilter}
      />
      <ContactBookCharacterList
      className="flex-auto"
      characters={filteredCharacters} 
    />
    </div>
  )
}

export default ContactBook
