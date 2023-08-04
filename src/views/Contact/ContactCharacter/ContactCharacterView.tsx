import { useContext } from 'react';
import CharacterContext from 'context/CharacterContext';
import ContactCharacterPersonalInfo from './ContactCharacterPersonalInfo';
import ContactCharacterEpisode from './ContactCharacterEpisode';

function ContactCharacterView() {
  const { character } = useContext(CharacterContext);

  return (
    character 
    ?
      <div className="flex flex-col pt-10 overflow-auto">
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
        <div className="flex-auto overflow-auto px-10">
          <ContactCharacterPersonalInfo character={character} />
          <ContactCharacterEpisode episodeUrls={character.episode} />
        </div>
      </div>
    : 
      <div>Character is not found</div>
  )
}

export default ContactCharacterView
