import React from 'react';

type InputProp = {
  id: string,
  className?: string,
}
type Props = InputProp & React.InputHTMLAttributes<HTMLInputElement>

function InputText({
  id,
  className,
  ...props
}: Props) {
  return (
    <input
      id={id}
      type='text'
      className={`border border-gray-300 px-1 ${className}`}
      {...props}
    />
  )
}

export default InputText
