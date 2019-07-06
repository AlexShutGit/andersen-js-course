/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
const Todos = require('../models/todos');

exports.all = (req, res) => {
  Todos.all((err, docs) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    return res.send(docs);
  });
};

exports.findByID = (req, res) => {
  Todos.findByID(req.params.id, (err, doc) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(doc);
  });
};

exports.add = (req, res) => {
  const todo = {
    name: req.body.name,
    complete: false,
  };
  Todos.add(todo, (err, result) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(todo);
  });
};

exports.update = (req, res) => {
  Todos.update(
    req.params.id,
    { name: req.body.name, complete: req.body.complete },
    (err, result) => {
      if (err) {
        console.log(err);
        return res.sendStatus(500);
      }
      res.sendStatus(200);
    }
  );
};

exports.delete = (req, res) => {
  Todos.delete(req.params.id, (err, result) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.sendStatus(200);
  });
};
