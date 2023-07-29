import React from 'react';

type InputProp = {
  label: string,
  value: string,
  checked: boolean,
  className?: string,
  onChange?: Function,
}
type Props = InputProp & React.InputHTMLAttributes<HTMLInputElement>

function InputRadio({
  id,
  label,
  value,
  checked,
  className,
  onChange,
}: Props) {
  return (
    <label className={`inline-flex hover:cursor-pointer ${className}`}>
      <input
        type='radio'
        value={value}
        checked={checked}
        onChange={onChange}
        className='mr-2'
      />
      { label }
    </label>
  )
}

export default InputRadio
