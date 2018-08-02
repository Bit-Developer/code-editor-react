const express = require('express');
const bodyParser = require('body-parser');

const FileApi = require('./api/FileApi');
const RunnerManager = require('./compiler/RunnerManager');

const PORT = process.env.PORT || 8080;

const app = express();
// Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// serve static files
app.use(express.static('dist'));

// Add headers
app.use((req, res, next) => {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

// test to make sure everything is working (accessed at GET http://localhost:8080/api)
app.get('/api', (req, res) => {
  res.json({ message: 'Hello! welcome to our api!' });
});

app.get('/api/file/:lang', (req, res) => {
  const language = req.params.lang;
  console.log(language);
  FileApi.getFile(language, (content) => {
    const file = {
      lang: language,
      code: content,
    };
    res.send(JSON.stringify(file));
  });
});

app.post('/api/run', (req, res) => {
  const file = req.body;
  console.log(`file.lang: ${file.lang}`, `file.code:${file.code}`);
  RunnerManager.run(file.lang, file.code, res);
});
app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
