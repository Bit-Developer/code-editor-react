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
Follow tutorial [Deploying Full Stack React App to Heroku](https://jojozhuang.github.io/tutorial/react/deploying-full-stack-react-app-to-heroku/) to deploy the React app to Heroku(RESTful API + Frontend React).

Follow tutorial [Continuously Deploy Full Stack React App to Heroku and Netlify with Travis-CI](https://jojozhuang.github.io/tutorial/react/continuously-deploy-full-stack-react-app-to-heroku-and-netlify-with-travis-ci/) to continuously deploy this Full Stack app to Heroku(RESTful API) and Netlify(Frontend React).

# Portfolio
Read portfolio [Code Editor(React)](https://jojozhuang.github.io/portfolio/code-editor-react/) to learn the main functions of this code editor.

# Tutorial
Read tutorial [Building Online Code Editor with React and Express](https://jojozhuang.github.io/tutorial/react/building-online-code-editor-with-react-and-express/) to learn how this online code editor is built.
