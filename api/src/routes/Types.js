const express = require('express');
const app = express.Router();
const axios = require('axios') 
const { Types } = require('../db.js');

app.get('/', function (req, res){
    console.log(Types)
   Types.findAll({attributes:['name','id']})
   .then(types =>{ const tipos = JSON.stringify(types)
           res.json(tipos)     
})
})



module.exports = app;

