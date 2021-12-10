# Tatjana Marković Express.js Crash Course by Traversy Media

- [YOUTUBE](https://www.youtube.com/watch?v=L72fhGm1tfE)

## Table of contents

  - [Overview](#overview)
  - [The challenge](#the-challenge)
  - [My process](#my-process)
  - [Built with](#built-with)
  - [Author](#author)

## Overview

- middleware folder 
  1. logger.js

- public folder - Static Pages to navigate
  1. html pages: about.html and index.html
  2. CSS folder -> style.css  

- routes/api folder
  1. members.js - REST API endpoints

- views folder -Template views - Server side render views
  1. layouts/main.handlebars - Template Container
  2. index.handlebars

## The challenge

Create Node.js HTTP Server  with dynamic urls, REST API and server render template with Express.js

### Links

- Solution URL: [GitHub](https://github.com/tatjama/node_express_crash_course)

## My process

1. Create a new project node_express_crash_course
2. Install node.js
3. create package.json
    npm init -y
4. instal express  
    npm install express
5. create .gitignore 
    node_modules
6.  Run file  
    node index
7. Install nodemon.js with
    npm install -D nodemon 
    We have 2 ways for execution:
    1. nodemon index
    2. "scripts": {
          "start": "node index",
          "dev": "nodemon index"
        },
        npm start dev
8. Install moment  to reach date and time information
    npm install moment
9. GITHUB: git init .
         : git commit and push
10. Install uuid generator  
    npm install uuid
11. Template - Create Server render Views
    - Instal Express Handlebars: 
        npm install express-handlebars
    - Link Bootstrap cdn at views/layout/main.handlebars
    Note: use exphbs.engine
12. Create Form
### Built with

1. Node.js
2. express.js
3. nodemon.js
4. uuid.js
5. express-handlebars.js
6. bootstrap.js

## Author

- Website - [Tatjana Markovic](https://my-react-portfolio-tatjana.vercel.app/)
- LinkedIn - [Tatjana Marković](https://www.linkedin.com/in/tatjana-markovi%C4%87-919501189/)
- GitHub - [tatjama](https://github.com/tatjama)