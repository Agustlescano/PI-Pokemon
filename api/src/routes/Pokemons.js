const express = require('express');
const app = express.Router();
const axios = require('axios') 

app.get(`/:idPokemon`,function (req, res){
    let id = req.params.idPokemon;
    console.log(id);    
    axios({
        method: 'GET',
        url: `https://pokeapi.co/api/v2/pokemon/${id}`
    }).then(data =>res.json(data.data.name))
      .catch(err =>res.json(err.message))
    
})
app.get('/', function (req, res){
    console.log(1)
    if(req.query.name){
        let name = req.query.name
        if (typeof name == 'string'){
            axios({
                method: 'GET',
                url: `https://pokeapi.co/api/v2/pokemon/${name}`
            }).then(data =>res.json(data.data.name))
              .catch(err =>res.json('error pokemon no encontrado'))
            }
            else res.send('name is not a string')
    }else {
    axios({
        method: 'GET',
        url: 'https://pokeapi.co/api/v2/pokemon'
    }).then(data =>res.json(data.data.results))}
    
})


module.exports = app;