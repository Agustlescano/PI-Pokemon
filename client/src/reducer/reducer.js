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

         



        default: return state
      }
}


export default reducer