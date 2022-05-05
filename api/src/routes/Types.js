const express = require('express');
const app = express.Router();
const axios = require('axios') 
const { Types } = require('../db.js');
const tipos =[]
app.get('/', async function (req, res){
    
   await Types.findAll({attributes:['name','id']})
   .then(res=>{  
           
        for (let i=0; i<res.length; i++) {
                if(!tipos.find(e=>e.name === res[i].dataValues.name)){
                tipos.push(res[i].dataValues)}}
                
})
res.send(tipos)
})



module.exports = app;

