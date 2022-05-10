import React, {useEffect,useState} from "react";
import {getpokemon,getallpokemons} from '../actions/actions'
import {useParams,NavLink} from "react-router-dom";
import {useDispatch,useSelector} from 'react-redux'
import './detail.css';
import Cargando from "./cargando";


 function Pokemon(){
     const dispatch = useDispatch();
     const {id} = useParams()
     let [aux,setaux] = useState(null)
     
     useEffect(async() =>{
       if(id.length >30 ){
         console.log('aca si entra') 
         dispatch(getallpokemons())
         
        }else{
          console.log('aca no entra')
          dispatch(getpokemon(id))
          
        }
      },[dispatch,id])
      let pokemon =  useSelector(state => state.pokemon) 
      let pokemons =  useSelector(state => state.pokemons) 

      
console.log(pokemons)
console.log(pokemon)
console.log('aux:'+aux)
if(id>898) {
  console.log("ole")
 return(
 <div className="detail">
   <NavLink className="Link" to='/pokemons'>Volver</NavLink>
    <h1>El ID no corresponde a un Pokemon disponible</h1>
   </div>
 )
}
  else if(!pokemons.length&&!pokemon.name){
     return(
       <Cargando></Cargando>
     )
   } else if(pokemon.name){
    return (<div className="detail" key={pokemon.id}>
      <NavLink className="Link"to='/pokemons'>Volver</NavLink>
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
   }else   if (pokemons.length){
    const i = pokemons.findIndex(p=>p.id.toString()===id)
    
      if (i>=0){
        console.log(i)
        return (<div className="detail" key={i}>
          <NavLink className="Link" to='/pokemons'>Volver</NavLink>
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







     

  
}

export default Pokemon