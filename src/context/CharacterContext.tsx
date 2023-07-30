import { createContext } from 'react';

// Based on: https://stackoverflow.com/a/67957976
type CharacterContext = {
  character: Character|null,
  setCharacter: Function,
}

export default createContext<CharacterContext>({} as CharacterContext)
