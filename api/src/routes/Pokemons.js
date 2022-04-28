const express = require('express');
const app = express.Router();
const axios = require('axios') 
const { Pokemon } = require('../db.js');

app.get(`/:idPokemon`,function (req, res){
    let id = req.params.idPokemon;
    let pokemon ={}   
    axios({
        method: 'GET',
        url: `https://pokeapi.co/api/v2/pokemon/${id}`
    }).then(data =>res.json(pokemon = {name:data.data.name,
         img:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`,
         id: data.data.id,
         type:data.data.types[0].type.name,
         hp:data.data.stats[0].base_stat,
         strength:data.data.stats[1].base_stat,
         defending:data.data.stats[2].base_stat,
         velocity:data.data.stats[5].base_stat,
         height:data.data.height,
         weight:data.data.weight,

          
         
       }))
      .catch(err =>res.json(err.message))
    
})
async function getPokemon(id){
    let pokemon ={}   
    await axios({
        method: 'GET',
        url: `https://pokeapi.co/api/v2/pokemon/${id}`
    }).then(data =>pokemon = {name:data.data.name,
          id:data.data.id,
         img:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`,
         type:data.data.types[0].type.name
       })
      .catch(err => console.log('el error:'+err))
      return pokemon
}
app.get('/', async function (req, res){
    console.log(1)
    const pokemones = []
    const pokemon={}
    Pokemon.findAll({attributes:['name','id']})
    
    if(req.query.name){
        let name = req.query.name
        if (typeof name == 'string'){
            axios({
                method: 'GET',
                url: `https://pokeapi.co/api/v2/pokemon/${name}`
            }).then(data =>res.json(pokemon={name:data.data.name,
                img:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`,
                id: data.data.id,
                type:data.data.types[0].type.name,
                hp:data.data.stats[0].base_stat,
                strength:data.data.stats[1].base_stat,
                defending:data.data.stats[2].base_stat,
                velocity:data.data.stats[5].base_stat,
                height:data.data.height,
                weight:data.data.weight,}
                ))
              .catch(err =>res.json('error pokemon no encontrado'))
            }
            else res.send('name is not a string')
    }else { for (let i = 1; i < 41; i++) {
            let aux = await getPokemon(i)
            console.log(aux)
            pokemones.push(aux)
        
        }
    } res.json(pokemones)
    
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

