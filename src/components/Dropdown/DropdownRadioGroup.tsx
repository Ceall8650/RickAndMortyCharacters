import { useCallback, useState } from 'react';
import InputRadio from 'components/Input/InputRadio';
import DropdownBase from './DropdownBase';

type Radio = {
  label: string,
  value: string,
}

type DropdownRadioGroupProps = {
  radios: Radio[],
  placeholder?: string,
  className?: string,
  onChange?: Function,
}

function DropdownRadioGroup({
  radios,
  placeholder,
  className,
  onChange,
}: DropdownRadioGroupProps) {
  const [selectedValue, setSelectedValue] = useState('')

  function handleRadioChange(e: React.ChangeEvent<HTMLInputElement>, setIsOpen: Function) {
    if(onChange) {
      onChange(e.target.value)
    }
    setIsOpen(false)
    setSelectedValue(e.target.value)
  }

  const clearActiveRadio = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if(onChange) {
      onChange()
    }
    e.stopPropagation()
    setSelectedValue('')
  }, [onChange])

  const customLabel = useCallback(() => {
    if(selectedValue) {
      const selectedRadio = radios.find(radio => radio.value === selectedValue);

      return (
        <div className='flex justify-between'>
        {selectedRadio?.label}
        <button onClick={clearActiveRadio}>X</button>
      </div>
      )
    }

    return ''
  }, [radios, selectedValue, clearActiveRadio])

  return (
    <DropdownBase
      className={className}
      placeholder={placeholder}
      customLabel={customLabel}
    >
      {(setIsOpen: Function) => (
        <div className="flex flex-col space-y-2 mb-4">
          {
            radios.map(radio => (
              <InputRadio
                key={radio.value}
                className='pl-2 hover:bg-blue-100'
                label={radio.label}
                value={radio.value}
                checked={selectedValue === radio.value}
                onChange={(e) => handleRadioChange(e, setIsOpen)}
              />
            ))
          }
        </div>
      )}
    </DropdownBase>
  )
}

export default DropdownRadioGroup
