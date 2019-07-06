/* eslint-disable prefer-destructuring */
/* eslint-disable import/order */
const db = require('../db');
const ObjectID = require('mongodb').ObjectID;

exports.all = cb => {
  db.get()
    .collection('todos')
    .find()
    .toArray((err, docs) => {
      cb(err, docs);
    });
};

exports.findByID = (id, cb) => {
  db.get()
    .collection('todos')
    .findOne({ _id: ObjectID(id) }, (err, doc) => {
      cb(err, doc);
    });
};

exports.add = (todo, cb) => {
  db.get()
    .collection('todos')
    .insert(todo, (err, result) => {
      cb(err, result);
    });
};

exports.update = (id, newData, cb) => {
  db.get()
    .collection('todos')
    .updateOne({ _id: ObjectID(id) }, newData, (err, result) => {
      cb(err, result);
    });
};

exports.delete = (id, cb) => {
  db.get()
    .collection('todos')
    .deleteOne({ _id: ObjectID(id) }, (err, result) => {
      cb(err, result);
    });
};
