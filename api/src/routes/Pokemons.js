const express = require('express');
const app = express.Router();
const axios = require('axios') 
const { Pokemon,Types } = require('../db.js');


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
         type:data.data.types[0].type.name,
         hp:data.data.stats[0].base_stat,
         strength:data.data.stats[1].base_stat,
         defending:data.data.stats[2].base_stat,
         velocity:data.data.stats[5].base_stat,
         height:data.data.height,
         weight:data.data.weight,
       })
      .catch(err => console.log('el error:'+err))
      return pokemon
}
let pokemones =[]
const cargarpokemons=()=>{  
         Pokemon.findAll({attributes:['name','id','img','Health','strength','defending','velocity','height','weight'],include: [{ model:Types, attributes:['name','id']}]})
         .then(res=>{
            for (let i=0; i<res.length; i++) {
                if(!pokemones.find(e=> e.name===res[i].dataValues.name))
                pokemones.push(res[i].dataValues)}
        console.log(pokemones)})
         
    }
    app.get('/', async function (req, res){
    console.log(req.query)
    let pokemon ={}
    // Pokemon.findAll({attributes:['name','id']})
    // .then(pokemon => { pokemones = JSON.stringify(types)})
    
    if(req.query.name){
        console.log('aca entra')
        let name = req.query.name
            axios({
                method: 'GET',
                url: `https://pokeapi.co/api/v2/pokemon/${name}`
            }).then((data) =>{
                res.json(pokemon={name:data.data.name,
                img:data.data.sprites.other.dream_world.front_default,
                id: data.data.id,
                type:data.data.types[0].type.name,
                hp:data.data.stats[0].base_stat,
                strength:data.data.stats[1].base_stat,
                defending:data.data.stats[2].base_stat,
                velocity:data.data.stats[5].base_stat,
                height:data.data.height,
                weight:data.data.weight,}
            )})
             .catch(err =>res.json('error pokemon no encontrado'))      
    }else { cargarpokemons()
         for (let i = 1; i < 41; i++) {
            let aux = await getPokemon(i)
           if(!pokemones.find(e=> e.name===aux.name)){

               pokemones.push(aux)
           }
        
        }
        console.log(pokemones)
     res.json(pokemones)}
    
})
app.post('/',async function (req, res){
const {name,Health,strength,defending,velocity,height,weight,img,types} = req.body;
console.log(req.body)
if(name){
const obj = await Pokemon.create({name:name,
            img:img,
            Health:Health,
            strength:strength,
            defending:defending,
            velocity:velocity,
            height:height,
            weight:weight
            })
 types.map(async(t)=>{
     console.log(t)
    const tipo= await Types.findAll({where:{name:t}})
    obj.addTypes(tipo) 
 })
res.send('pokemon created')
}else res.send('Faltan valores obligatorios')
})


module.exports = app;

