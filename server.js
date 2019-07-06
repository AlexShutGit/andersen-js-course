const express = require('express');
const parser = require('body-parser');
// const mongoClient = require('mongodb').MongoClient();
// const ObjectID = require('mongodb').ObjectID;
const db = require('./db');
const todosController = require('./controllers/controller');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', '*');
  next();
});

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('hello API');
});

app.get('/todo', todosController.all);

app.get('/todo/:id', todosController.findByID);

app.post('/todo', todosController.add);

app.put('/todo/:id', todosController.update);

app.delete('/todo/:id', todosController.delete);

db.connect('mongodb://localhost:27017/todo', err => {
  if (err) {
    return console.log(err);
  }
  app.listen(3000, () => {
    console.log('Start server');
  });
});
