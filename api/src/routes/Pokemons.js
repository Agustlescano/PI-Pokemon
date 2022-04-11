const express = require('express');
const app = express.Router();
const axios = require('axios') 
const { Pokemon } = require('../db.js');

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
    const pokemones = []
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
    }).then(data =>data.data.results.map(r => {pokemones.push(r.name)})).then(()=> res.json(pokemones
        ))}
    
})
app.post('/',function (req, res){
const {name,Health,strength,defending,velocity,height,weight} = req.body;
if(name){
const obj = {name:name,
            Health:Health,
            strength:strength,
            defending:defending,
            velocity:velocity,
            height:height,
            weight:weight
            }
return Pokemon.create(obj)}else res.send('Faltan valores obligatorios')
})


module.exports = app;