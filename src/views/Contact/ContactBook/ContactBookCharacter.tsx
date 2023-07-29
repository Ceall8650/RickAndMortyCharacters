import { NavLink } from "react-router-dom";

type ContactBookCharacterProps = {
  character: Character;
};
type Props = ContactBookCharacterProps & React.HTMLAttributes<HTMLAnchorElement>

function ContactBookCharacter({ 
  character,
  className,
  ...props
}: Props) {
  return (
    <NavLink
      to={String(character.id)}
      className={`py-4 px-4 flex items-center ${className}`} 
      { ...props }
    >
      <img
        src={character.image}
        alt="Avatar"
        width="100" 
        height="100"
        className="rounded-full mr-6"
      />
      <div className="flex flex-col">
        <span className="mb-2">{character.name}</span>
        <span>{character.species}</span>
      </div>
    </NavLink>
  );
}

export default ContactBookCharacter;
