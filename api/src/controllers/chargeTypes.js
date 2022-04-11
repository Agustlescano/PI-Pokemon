const  axios  = require("axios")
const {Types} = require('../db.js')

async function TraerTipos(req, res, next) {
    try {
        let tipos = 
        await axios('https://pokeapi.co/api/v2/type'
        ).then(d =>d.data.results.map(t => {return {
            name: t.name,
        }}))
        
        return tipos
    }catch (err) {
        console.log(`error : ${err}`)}
}

async function cargarTipos() {
    let tipos =await TraerTipos()
    tipos.map(t => {return Types.create(t)})

}

module.exports ={
    cargarTipos,
}