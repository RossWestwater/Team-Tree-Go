const express = require("express");
const mysql = require("mysql2");
const db = require("./config/connection");
const routes = require('./routes/index');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', routes);

app.use((req, res)=> {
  res.status(404).end();
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to the Database.");
  app.listen(PORT, () => {
    console.log(`Server listening for requests on Port ${PORT}`);
  });
});
