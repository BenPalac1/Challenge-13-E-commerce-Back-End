# Challenge-13-E-commerce-Back-End
Object-Relational Mapping (ORM) Challenge

## Description

This challenge was to build the back end for an e-commerce site. I was given a working Express.js API and configured it to use Sequelize to interact with a MySQL database.
Then I tested all of the routes for seeded database in Insomnia.

## User Story

AS A manager at an internet retail company

I WANT a back end for my e-commerce website that uses the latest technologies

SO THAT my company can compete with other e-commerce companies

## Acceptance Criteria

GIVEN a functional Express.js API

WHEN I add my database name, MySQL username, and MySQL password to an environment variable file

THEN I am able to connect to a database using Sequelize

WHEN I enter schema and seed commands

THEN a development database is created and is seeded with test data

WHEN I enter the command to invoke the application

THEN my server is started and the Sequelize models are synced to the MySQL database

WHEN I open API GET routes in Insomnia Core for categories, products, or tags

THEN the data for each of these routes is displayed in a formatted JSON

WHEN I test API POST, PUT, and DELETE routes in Insomnia Core

THEN I am able to successfully create, update, and delete data in my database


## Video Showing App Functionality

Video showing functioning Routes: GET all, GET one, POST, PUT, and DELETE for Categories, Products, and Tags in Insomnia.  Video does have audio/dialogue.
https://github.com/BenPalac1/Challenge-13-E-commerce-Back-End/assets/139652929/2134cea9-b6e0-4ba0-b60a-6ca7d58f8356


## Usage Instructions

1.) Clone the repo and open it using VS code.

2.) Open a new terminal in vscode, run an "npm i" to install dependencies, and change the ".env file" to match your credentials.

3.) Navigate to the db folder then access mysql in terminal by typing "mysql -u root -p" when prompted for password,
    enter your password from your modified .env file.  Then enter "source schema.sql" to source the schema.  
    Next type "quit"
    
4.) Back in the main folder, run "npm run seed" to seed the database and the "npm run watch" to get it started on port 3001.

5.) Now open insomnia and access the seeded db through http://localhost:3001/ to test out routes.


## Built and Tested with
    - Node
    - Javascript
    - MySql
    - Insomnia


## Other Resources
    - Class Modules and Mini Project for Module 13
    - Google
    - MDN Webdocs
    - ChatGPT


## License
MIT License

Copyright (c) 2023 Ben Palacpac

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
