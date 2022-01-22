const express = require('express');
const router = express.Router();
const db = require('../config/connection');

router.get('/department', (req,res) =>{
  const sql = `SELECT * FROM department`;
  db.query(sql, (err, rows) =>{
    if (err) {
      res.status(500).json({error: err.message})
      return;
    }
    res.json({
      message: 'query successful',
      data: rows
    });
  });
});

module.exports = router;