import {
  useState,
  useEffect,
} from 'react';

type DropdownProps = {
  placeholder?: string,
  customLabel?: Function,
  className?: string,
  children?: Function,
}

function DropdownBase({
  placeholder = '--',
  customLabel,
  className,
  children
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)

  function removeMenu(e: MouseEvent) {
    e.stopPropagation()
    setIsOpen(false)
  }

  function handleClick(e: React.MouseEvent<HTMLElement>) {
    e.stopPropagation()
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    if (isOpen) {
      document.body.addEventListener('click', removeMenu)
    } else {
      document.body.removeEventListener('click', removeMenu)
    }

    return () => {
      document.body.removeEventListener('click', removeMenu)
    }
  }, [isOpen])

  return (
    <div className={`relative ${className}`}>
      <div 
        className="hover:cursor-pointer border border-gray-300 rounded-sm p-1 w-40" 
        onClick={handleClick}
      >
        {(customLabel && customLabel()) || placeholder}
        
      </div>
      {
        isOpen &&
        <div 
          className='absolute min-h-[10px] bg-white border border-gray-300 hover:cursor-pointer w-40 py-2'
          onClick={e => e.stopPropagation()}
        >
          {children && children(setIsOpen)}
        </div>
      }
    </div>
  )
}

export default DropdownBase
