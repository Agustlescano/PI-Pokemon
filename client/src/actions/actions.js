const axios = require('axios') 


export const GET_POKEMONS = 'GET_POKEMONS'
export const GET_POKEMON = 'GET_POKEMON'


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
        .then (resp=> dispatch({type: GET_POKEMON, payload: resp.data})).then(() => console.log('hola'))
        .catch(err=> console.log(err))
    }
}