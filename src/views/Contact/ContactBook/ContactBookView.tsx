import { useState } from 'react';
import ContactBookSearch from './ContactBookSearch';
import ContactBookCharacterList from './ContactBookCharacterList';

type Props = React.HTMLAttributes<HTMLDivElement>

function ContactBook({ className, ...props }: Props) {
  const [filter, setFilter] = useState({})

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
      filter={filter}
    />
    </div>
  )
}

export default ContactBook
