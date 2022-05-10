import React, {useEffect} from "react";
import {useParams,NavLink} from "react-router-dom";
import {useDispatch,useSelector} from 'react-redux'
import {search,getallpokemons} from '../actions/actions'
import Cargando from './cargando'



function Search (){
    const dispatch = useDispatch()
    const {name} = useParams()
    useEffect(() =>{
    dispatch(search(name.toLowerCase()))
    dispatch(getallpokemons())}
     ,[dispatch])
     const pokemon=useSelector(state => state.search)
     const pokemons=useSelector(state => state.pokemons)
     if(!pokemons.length&&!pokemon.name){
      return(
        <Cargando></Cargando>
      )}
     if(pokemon.name){
        return (<div className="detail" key={pokemon.id}>
          <NavLink className="Link"  to='/pokemons'>Volver</NavLink>
                 <h1>{pokemon.name} </h1>
                 <img src={pokemon.img} width="250" height="250" alt=""/>
                 <p>Type:{pokemon.type}</p>
                 <p>HP:{pokemon.hp}</p>
                 <p>Attack:{pokemon.strength}</p>
                 <p>Defense:{pokemon.defending}</p>
                 <p>Speed:{pokemon.velocity}</p>
                 <p>Height:{pokemon.height}</p>
                 <p>Weight:{pokemon.weight}</p>
              
             </div>)
       } else if (pokemons.length && !pokemon.name){
        const i = pokemons.findIndex(p=>p.name===name)
        
          if (i>=0){
            console.log(i)
            return (<div className="detail" key={i}>
              <NavLink className="Link"  to='/pokemons'>Volver</NavLink>
                   <h1>{pokemons[i].name} </h1>
                  <img src={pokemons[i].img} width="250" height="250" alt=""/>
                   <p>Types:{pokemons[i].types.map(t=>{
                     return(<div>
                      { t.name}
                     </div>)
                   })}</p>
                   <p>HP:{pokemons[i].Health}</p>
                   <p>Attack:{pokemons[i].strength}</p>
                    <p>Defense:{pokemons[i].defending}</p>
                     <p>Speed:{pokemons[i].velocity}</p>
                     <p>Height:{pokemons[i].height}</p>
                     <p>Weight:{pokemons[i].weight}</p>
                  
                 </div>)
          }
        }
       {return(
        <div className="detail" key={1}>
          <NavLink className="Link" to='/pokemons'>Volver</NavLink>
           <h1>El NOMBRE no corresponde a un Pokemon disponible</h1>
          </div>
        )}
}

export default Search