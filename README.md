# Byte Sized Tech Cache
[![License](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)

## Description
This is a CMS style tech blog site. Anyone can look at the blogs written, users can keep track of their own blogs and comment on others on the site. The motivation for the project was to have a place where people could come together and discuss tech issues and cool ideas. I built this project to master some of the key software development concepts and files structures. It solves the problem of that some developers have of explaining things in a clear and concise way. I learned a lot about sequalize and express handlebars for rendering pages. 


## Installation
Before cloning this repo a mysql data base will need to be set up and then connected to the program.  The mysql database schema can be found in the `db` directory and can be run to set up the `techblog_db`. After setting up the mysql table you can login to the data base by creating a .env file and entering your db credentials into the following fields:

`
DB_NAME=''
DB_USER=''
DB_PW=''
SESSION_SECRET=''
`

DB_Name will be "techblog_db" and the other three will be your personal mysql login information and session secret.

After mysql database is set up clone the repo, run `npm install` in the main directory and start the server with `npm start`.  

After running npm start the ORM models will automatically be called and sync to form 3 tables in the techblog_db:

1. Users
2. Posts
3. Comments
4. product tag (junction table)

DB Schema:

![Database](/public/screenshots/db.png)

## Usage

The cite is publicly hosted on heroku at: https://polar-bayou-19405-500562218ea7.herokuapp.com

Usage is very simple and straight forward. Upon navigating to the site you will see a splash page that contains all blog posts from all users.

![Database](/public/screenshots/splash.png)

Anyone can read the articles, but to comment or create your own content you will need to click the login in button on the top right of the screen. You will be taken to a login page:

![Login](/public/screenshots/login.png)

If you do not have an account please click the sign in link and sign up: 

![Signup](/public/screenshots/signup.png)

After login you will be greeted with a custom dashboard that shows the blog posts you have created:

![Dashboard](/public/screenshots/dashboard.png)

Clicking the title of the articles will open up an edit page where you can update the post or delete it all together:

![Edit](/public/screenshots/edit.png)

Back on the dashboard there is a green button for creating a new post, if pressed you will be taken to the new post section:

![New Post](/public/screenshots/createPost.png)

Filling in the sections and hitting the create button will post the blog. Navigating to the homepage (once logged in ) the articles are selectable. If you click on an article you will be taken to the comments page:

![Comment](/public/screenshots/comment.png)

## Credits
Sequelize Documentation. (n.d.). https://sequelize.org/docs/v6/getting-started/.

University of Texas. (2024). UT GROUP PROJECT 2.

Bootstrap Documentation. (n.d.). https://getbootstrap.com/docs/5.3/getting-started/introduction/.

Handlebars.js Documentation. (n.d.). https://handlebarsjs.com/guide/builtin-helpers.html#built-in-helpers.

## License
This app is licensed under the WTFPL license. Information on the license can be found online at http://www.wtfpl.net/about/ or by clicking the badge above.

## Questions
GitHub Repo: https://github.com/Spencox/ByteSizeTech-Cache  

Email: spencox@gmail.com
