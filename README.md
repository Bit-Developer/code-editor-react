# Online Code Editor
A full stack web application for online programming, built with React(Frontend) and Express(Backend).
<kbd>![image](/public/codeeditor.png)</kbd>

# Function
This application is used for online coding. After selecting the programming language, you can start to write code. Below are the highlighted features.
* Five programming languages are supported, including c, c++, java, javascript and python.
* Syntax highlighting for different languages.
* Compilation and execution are supported. The proper result or error message will be displayed.

# Technology
The Server is built with Express. The used libraries for server are listed as follows.
* RESTful API: express, express router, cors
* Compilation & Execution: spawn in node.js

The Client is built with React and 3rd-party libraries, see below.
* Styling: bootstrap
* Rich Text Editor: react-ace

# Demo
Two available demos:
* `Live Demo on Heroku:` <a href="https://code-editor-react.herokuapp.com/" target="\_blank">https://code-editor-react.herokuapp.com/</a>
* `Live Demo on Netlify:` <a href="https://code-editor-react.netlify.com/" target="\_blank">https://code-editor-react.netlify.com/</a>
* `Live Demo on Azure:` <a href="https://code-editor.azurewebsites.net/" target="\_blank">https://code-editor.azurewebsites.net/</a>

*Note: The demo websites may be slow when you access them for the first time. Be patient!*

# Setup Locally
```bash
git clone https://github.com/jojozhuang/code-editor-react.git
cd code-editor-react
npm install
npm run dev
```
Access http://localhost:3000/ in web browser and click 'Code Editor' button, enjoy!

# Deployment
Follow tutorial [Deploying Full Stack React App to Heroku](https://jojozhuang.github.io/tutorial/deploying-full-stack-react-app-to-heroku) to deploy the React app to Heroku(RESTful API + Frontend React).

Follow tutorial [Continuously Deploy Full Stack React App to Heroku and Netlify with Travis-CI](https://jojozhuang.github.io/tutorial/continuously-deploy-full-stack-react-app-to-heroku-and-netlify-with-travis-ci) to continuously deploy this Full Stack app to Heroku(RESTful API) and Netlify(Frontend React).

## Steps(Updated on July 18, 2021)
Manually deploy the same git repo to two apps in heroku. Use `Multi Procfile buildpack` to deploy multiple apps in a monorepo.

### Server
Create app `code-editor-api` for backend api.
```sh
cd code-editor-react
heroku login
heroku create -a code-editor-api
heroku buildpacks:add -a code-editor-api heroku-community/multi-procfile
heroku buildpacks:add -a code-editor-api heroku/nodejs
heroku config:set -a code-editor-api PROCFILE=src/server/Procfile
git push https://git.heroku.com/code-editor-api.git HEAD:master
```

### Client
Create app `code-editor-react` for client website.
```sh
cd code-editor-react
heroku login
heroku create -a code-editor-react
heroku buildpacks:add -a code-editor-react heroku-community/multi-procfile
heroku buildpacks:add -a code-editor-react heroku/nodejs
heroku config:set -a code-editor-react PROCFILE=Procfile
git push https://git.heroku.com/code-editor-react.git HEAD:master
```

## Update
Server.
```sh
cd code-editor-react
heroku login
heroku git:remote -a code-editor-api
git commit --allow-empty -m "Upgrading to heroku-20"
git push heroku master
```

Client.
```sh
cd code-editor-react
heroku login
heroku git:remote -a code-editor-react
git commit --allow-empty -m "Upgrading to heroku-20"
git push heroku master
```
* [Upgrading to the Latest Stack](https://devcenter.heroku.com/articles/upgrading-to-the-latest-stack)

# Portfolio
Read portfolio [Code Editor(React)](https://jojozhuang.github.io/project/code-editor-react/) to learn the main functions of this code editor.

# Tutorial
Read tutorial [Building Online Code Editor with React and Express](https://jojozhuang.github.io/tutorial/building-online-code-editor-with-react-and-express) to learn how this online code editor is built.


# Docker
Build for production. All the compiled html files and js files will be generated in `dist`.
```sh
npm run build
```
Create image with nginx for frontend.
```sh
docker build -t jojozhuang/code-editor-web .
```
Create image with node for backend.
```sh
docker build -t jojozhuang/code-editor-server . -f Dockerfile-server
```
Create container.
```sh
docker run --name code-editor-web -p 9010:80 -d jojozhuang/code-editor-web
docker run --name code-editor-server -p 9011:80 -d jojozhuang/code-editor-server
```
Access http://192.168.0.2:9010/ in browser.