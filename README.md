# DataSnake [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

## Deployed App Links
- [Heroku Link](https://group4-project2-c23a5470e6d9.herokuapp.com/)
- [Github Link](https://github.com/ajprobel/group4-project2)

### Table of Contents
  - [Description](#description)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [How to use](#how-to-use)
  - [Installation](#installation)
  - [Demo](#demo)
  - [Credits](#credits)
  - [License](#license)

## Description
DataSnake is a back-end interactive web application game for users to play and enjoy. This application allows users to engage the classic snake game while having access to their own personal account to view their history of scores, viewing other's highscores or accounts by searching through a username or first and last name and seeing overall highscores by all users. The user must log in to play the game and receive a score. 

## Features
- Highscores: Access highscores from all users
- Account info: See users name, username and a history of scores
- Search a user: Look up any user by username or first and last name and receive information regarding their highscore

## Technologies Used
- JavaScript for interactivity and dynamic content loading.
- Handlebars template engine for UI and UX
- Express, Node.js and json packages for web application framework
- MySQL and Sequelize for data storage
- gitignore for modifying, creating and deleting untracked files 
- Bcrypt.js for password protection and encryption
- Prettier for formatting and reviewing content
- AnimeJS for animation styling

## How to Use
1. Create an account

- Enter your first and last name into the form fields
- Create a username
- Create a password

2. Login to your Account

- Type your username and password
- Click Login (if you do not have an account, return to step one)

3. Play Game and recieve score

- The game will automatically start once you are logged in
- Use arrow keys to control the direction the snake moves in and collect all the particles for the snake to get larger
- Once the snake runs into itself, recieve a score
- The score is logged into your account data and the application data

4. Look at High Scores

- Click the High Scores tab to see the top ten high scores by users

5. Search for a user

- Navigate to the Search for a user tab
- Enter a users name or username to see their profile and history of scores

6. Look at your account

- Click on the Account tab in the homepage to view your name, username and a history of your scores

## Installation
To skip all the following steps, click the deployed Heroku link & begin gaming
To run the app successfully via terminal, follow these steps:
- Clone the git repository
- Run the command 'npm i' or 'npm install' to install all required dependencies
- Next, run 'npm run seed' to source the database with user information
- Open the 'server.js' by right clicking and choosing 'open in integrated terminal'
- Run 'npm start' in the integrated terminal
- Lastly, go to "localhost:3001/" in your browser to view the game
- Enjoy a fun game of Datasnake!

## Demo
<img width="1175" alt="datasnakeLogin" src="https://github.com/ajprobel/group4-project2/assets/155387264/bf24b07c-135e-4ff1-8271-25951d4528c5">

[DemoVideo link](https://watch.screencastify.com/v/E6E6TIl84axXlhWLCa0o)
 

## Credits
Daniel Cross, Bailey Ellison, Andrew (James) Probel, Sandy Vazquez

Credit to Steven Lambert for an HTML version of snake that works in-browser:
https://gist.github.com/straker/ff00b4b49669ad3dec890306d348adc4
- we altered this code for use in our application; added difficulties, added start button, saving scores as a fetch to our api, etc.

## License
MIT License 

Copyright (c) [2024] 

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

