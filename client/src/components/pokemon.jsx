import React, {useEffect,useState} from "react";
import {getpokemon} from '../actions/actions'
import {useDispatch, useSelector} from 'react-redux'

 function Pokemon(id){
    const dispatch = useDispatch;
    
    useEffect(() =>{
        dispatch(getpokemon(id))
       
      },[dispatch])
      let pokemons = useSelector(state => state.pokemon)


      return (<div>
          <h1> {pokemons.name} </h1>
      </div>)
  
}

export default Pokemon