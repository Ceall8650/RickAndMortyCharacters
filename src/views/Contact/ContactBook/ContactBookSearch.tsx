import { Dispatch, SetStateAction } from 'react';
import InputText from 'components/Input/InputText';
import DropdownRadioGroup from 'components/Dropdown/DropdownRadioGroup';

type ContactBookSearchProps = {
  setFilter: Dispatch<SetStateAction<Filter>>,
}

type Props = ContactBookSearchProps & React.HTMLAttributes<HTMLDivElement>

function ContactBookSearch({
  className,
  setFilter,
}: Props) {
  const statusRadios = [
    { label: 'Alive', value: 'Alive' },
    { label: 'Dead', value: 'Dead' },
    { label: 'Unknown', value: 'unknown' },
  ]
  const genderRadios = [
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
    { label: 'Genderless', value: 'genderless' },
    { label: 'Unknown', value: 'unknown' },
  ]

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setFilter((filter: Filter): Filter => ({
      ...filter,
      keyword: e.target.value
    }))
  }
  function handleStatusChange(status: string) {
    setFilter((filter: Filter): Filter => ({
      ...filter,
      status,
    }))
  }

  function handleGenderChange(gender: string) {
    setFilter((filter: Filter): Filter => ({
      ...filter,
      gender,
    }))
  }

  return (
    <div className={`px-4 pb-5 ${className}`}>
      <h2 className="text-xl mb-2">Contact</h2>
      <InputText 
        placeholder='Search Characters' 
        id="character_search" 
        className="mb-2" 
        onInput={handleInput}
      />
      <div className='flex'>
        <DropdownRadioGroup
          placeholder="Status"
          radios={statusRadios}
          className="mr-2"
          onChange={handleStatusChange}
        />
        <DropdownRadioGroup
          placeholder="Gender"
          radios={genderRadios} 
          onChange={handleGenderChange}
        />
      </div>
    </div>
  )
}

export default ContactBookSearch
