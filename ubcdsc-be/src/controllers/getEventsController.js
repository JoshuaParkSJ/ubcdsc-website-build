const connection = require('../../database/database');

const getEventsController = async (req, res) => {
  connection.query('SELECT * FROM events', (err, rows, fields) => {
    if (!err) {
      console.log('success:', rows)
      res.send(rows)
    } else {
      console.log('error: ',err);
    }
  })
};

module.exports = getEventsController;