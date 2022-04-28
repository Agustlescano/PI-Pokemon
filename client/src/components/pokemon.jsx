import React, {useEffect} from "react";
import {getpokemon} from '../actions/actions'
import {useParams} from "react-router-dom";
import {useDispatch,useSelector} from 'react-redux'
import './detail.css';


 function Pokemon(){
    const dispatch = useDispatch();
    const {id} = useParams()
    useEffect(() =>{
      dispatch(getpokemon(id))
    },{dispatch})
    let pokemon = useSelector(state => state.pokemon)
    console.log(pokemon.velocity)
    if(id<=40){
      return (<div className="detail">
          <h1>{pokemon.name} </h1>
          <img src={pokemon.img} width="250" height="250" alt=""/>
          <p>Type:{pokemon.type}</p>
          <p>HP:{pokemon.hp}</p>
          <p>Attack:{pokemon.strength}</p>
          <p>Defense:{pokemon.defending}</p>
          <p>Speed:{pokemon.velocity}</p>
          <p>Height:{pokemon.height}</p>
          <p>Weight:{pokemon.weight}</p>
        
      </div>)}else {
        return(
          <div className="detail">
            <h1>El ID no corresponde a un Pokemon disponible</h1>
          </div>
        )
      }
  
}

export default Pokemon