import React from 'react';

type OwnProps = {
  label: string,
  className?: string,
}
type Props = OwnProps & React.ButtonHTMLAttributes<HTMLButtonElement>

function ButtonText({
  label,
  className,
  ...props
}: Props) {
  return (
    <button
      className={`py-1 px-2 bg-white border border-gray-300 ${className}`}
      {...props}
    >
      {label}
    </button>
  );
}

export default ButtonText;
