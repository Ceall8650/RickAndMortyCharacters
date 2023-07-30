import { useState, Suspense } from 'react';
import { Outlet } from "react-router-dom";
import CharacterContext from 'context/CharacterContext';
import ContactBookView from './ContactBook/ContactBookView';

function ContactView() {
  const [character, setCharacter] = useState<Character|null>(null);

  return (
    <CharacterContext.Provider value={{
      character,
      setCharacter
    }}>
      <div className="grid grid-cols-contact overflow-hidden">
        <ContactBookView className="border-r border-gray-300" />
        <Suspense fallback={<div>Page is Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </CharacterContext.Provider>
  )
}

export default ContactView
