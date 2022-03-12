require('dotenv').config()
const mongoose = require('mongoose');
mongoose.connect(`${process.env.DB_URL}`, {useNewUrlParser:true});
const db = mongoose.connection;
db.on('error', (err) => {
  console.log('Connection error', err);
  process.exit(1)
});
module.exports = db