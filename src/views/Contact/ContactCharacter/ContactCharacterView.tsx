import { useLoaderData } from "react-router-dom";
import ContactCharacterPersonalInfo from './ContactCharacterPersonalInfo';
import ContactCharacterEpisode from './ContactCharacterEpisode';

function ContactCharacterView() {
  const {character, episode} = useLoaderData() as { character: Character, episode: Episode}

  return (
    <div className="pt-10">
      <div className="px-10 pb-5 flex items-center border-b border-gray-300">
        <img
          src={character.image}
          alt="Avatar"
          width="150"
          height="150"
          className="rounded-full mr-5"
        /> 
        <h3 className="text-4xl">{character.name}</h3>
      </div>
      <div className="px-10">
        <ContactCharacterPersonalInfo character={character} />
        <ContactCharacterEpisode episode={episode} />
      </div>
    </div>   
  )
}

export default ContactCharacterView
