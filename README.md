# GameHub
### View the demo [here](https://react-game-dashboard.netlify.app/).
![GameHub](https://raw.githubusercontent.com/paul963/react-game-dashboard/master/site-preview.webp)

### Overview
React application for a dashboard for a gaming platform. To make searching for the game you want easier there is a search bar that searches for the game by title.\
Games can be filtered by game genre and platform on which the game can be played. Sorting of the games is done by default by relevance, but there is the possibility to sort by date added, name, release date, popularity and rating.\
The games are taken from an API (RAWG API).

### Features
- Games dashboard
- Filter by genre and sorting games
- Search bar to find games easier
- Dark mode and light mode

### Technologies used
- React
- HTML
- CSS and Bootstrap
- TypeScript
- RESTful API (RAWG API)

### Getting started
1. Clone repository
2. Run `npm i` to install the required dependencies
3. Run `npm start` to start the web server
4. Create an account and get a RAWG API key at https://rawg.io/apidocs (optional)
5. Add the API key to src/services/api-client.ts (optional)