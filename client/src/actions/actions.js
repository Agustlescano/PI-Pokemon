const axios = require('axios') 


export const GET_POKEMONS = 'GET_POKEMONS'
export const GET_POKEMON = 'GET_POKEMON'
export const GET_TYPE='GET_TYPE'


export const getallpokemons = function(){
    return  function (dispatch) {
        return axios('http://localhost:3001/Pokemons')
        .then (resp=> dispatch({type: GET_POKEMONS, payload: resp.data})).then(() => console.log('hola'))
        .catch(err=> console.log(err))
    }
}
export const getpokemon = function(id){
    return function (dispatch) {
        return axios(`http://localhost:3001/Pokemons/${id}`)
        .then (resp=> dispatch({type: GET_POKEMON, payload: resp.data}))
        .catch(err=> console.log(err))
    }
}
export const createpokemon = function(pokemon){
    console.log(pokemon)
    axios.post('http://localhost:3001/Pokemons',pokemon)
    .then (resp=> console.log(resp))
    .catch(err=>console.log(err))
        
    
}
export const gettype = function(){
    return function (dispatch) {
        return axios(`http://localhost:3001/Types`)
        .then (resp=> dispatch({type: GET_TYPE, payload: resp.data})).then(() => console.log('hola'))
        .catch(err=> console.log(err))
    }
}