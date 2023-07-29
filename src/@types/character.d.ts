type CharacterLocation = {
  name: string,
  url: string,
}

type Origin = {
  name: string,
  url: string,
}

declare type Character = {
  "id": number,
  "name": string,
  "status": string,
  "species": string,
  "type": string,
  "gender": string,
  "origin": Origin,
  "location": CharacterLocation,
  "image": string,
  "episode": string[],
  "url": string,
  "created": string
}
