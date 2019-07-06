const mongoClient = require('mongodb').MongoClient();

const state = {
  db: null,
};

exports.connect = (url, done) => {
  if (state.db) {
    return done();
  }

  mongoClient.connect(url, (err, db) => {
    if (err) {
      return done(err);
    }
    state.db = db.db('todos');
    done();
  });
};

exports.get = () => {
  return state.db;
};
