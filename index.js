require('dotenv').config();
const express = require('express');
const {getAll, getByName, db} = require('./databse/pg');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/users', (req, res) => {
  try{
    getAll((err, result) => {
      if(err){
        res.status(500).send(err);
      }
      res.status(200).send(result);
    });
  }
  catch (err) {
    console.log(err);
    res.status(500);
  }
});

app.get('/users/:name', (req, res) => {
  try{
    getByName(req.params.name, (err, result) => {
      if(err){
        res.status(500).send(err);
      }
      res.status(200).send(result);
    });
  }
  catch (err) {
    console.log(err);
    res.status(500);
  }
});


app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
  try {
    db.query('SELECT NOW()', (err, result) => {
      if(err){
        console.log("DATABASE CONNECTION ERROR:",err);
      }
      else{
        console.log("DB CONNECTION SUCCESS:",result.rows[0].now);
      }
    });
  } catch (err) {
    console.log(err);
  }
});

