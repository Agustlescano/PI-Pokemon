const inicialState = {
    pokemons: [],
    pokemon:{},
    types: []
}


function reducer (state=inicialState,{type,payload}) {
    switch(type){
         case 'GET_POKEMONS': {
         let arr = payload
         return {...state,pokemons:arr }}
        
         case 'GET_POKEMON':{
             return {...state,pokemon:payload}
         }
        case 'GET_TYPE':{
           return {...state,types:payload}
        }
         



        default: return state
      }
}


export default reducer