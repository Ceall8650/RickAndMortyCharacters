# RickAndMortyCharacters
A character introduction for all characters in Rick and Morty

## Project Environment
* Node v18.15.0 (if you use the NVM to manage the node versions, make sure the nvm version should be at least `v0.39.3`)
* React 18.2.0
* React Router v6.14.2
* Tailwind 3

## API Doc
Official site: https://rickandmortyapi.com/

Used APIs in the page:
- Characters: https://rickandmortyapi.com/api/character
- Specific character: https://rickandmortyapi.com/api/character/:id
- Episodes: https://rickandmortyapi.com/api/episode
- Specific episodes: https://rickandmortyapi.com/api/episode/:id

## Features
- [X] Dynamic load the component
- [X] Infinity scrolling
- [X] Get the character list based on the filters

- Dynamic load the component
  - When click the `Contact` item of the sidebar menu, the page will navigate to the `/contact` page, the characters of the Rick And Morty would be displayed on the page. 
  - The component for displaying the character list will be loaded at this time

- Infinity scrolling
  - The DOM for all characters would `NOT` be rendered when retrieve the character list, only the DOM of the characters on the viewpoint would be rendered. When scrolling the character list, the browser would remove the characters which are out of the viewpoint and render the characters who enter the viewpoint.
  - The images of each character would be loaded when the render a new character who just enter the viewpoint

- Get the character list based on the filters
  - When select one of the option of the`Status` or `Gender` dropdown, the new character list with these filter conditions would be fetched from API. 

## Available Scripts

In the project directory, you can run:

### `npm install`
Install all the necessary packages for the project

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:5000](http://localhost:5000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run deploy`
Deploy the site to the `GitHub Pages`.

Home page: https://ceall8650.github.io/RickAndMortyCharacters/

