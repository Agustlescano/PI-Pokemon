
import React  from "react";



function Search ({pokemons}){
    console.log(pokemons);
    if(pokemons.length) {pokemons=[]}
    console.log(pokemons);

    return (
        <input     placeholder={'Buscar pokemos...'}  type="text"/>
    )
}

export default Search