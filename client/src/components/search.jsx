import {useDispatch, useSelector} from 'react-redux'
import React, {useEffect,useState} from "react";



function Search (){
    const dispatch = useDispatch()
    let pokemons = useSelector(state => state.pokemons)
    return (
        <input     placeholder={'Buscar pokemos...'}  type="text"/>
    )
}

export default Search