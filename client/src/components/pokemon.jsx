import React, {useEffect} from "react";
import {getpokemon,getallpokemons} from '../actions/actions'
import {useParams,NavLink} from "react-router-dom";
import {useDispatch,useSelector} from 'react-redux'
import './detail.css';
import Cargando from "./cargando";


 function Pokemon(){
     const dispatch = useDispatch();
     const {id} = useParams()
     useEffect(() =>{
       if(id.length >30 ){
         console.log('aca si entra') 
         dispatch(getallpokemons())
        }else{
          console.log('aca no entra')
          dispatch(getpokemon(id))
        }
      },[dispatch])
      let pokemon =  useSelector(state => state.pokemon) 
      let pokemons =  useSelector(state => state.pokemons) 
console.log(pokemons)
console.log(pokemon)
if(id>898) {
  console.log("ole")
 return(
 <div className="detail">
    <h1>El ID no corresponde a un Pokemon disponible</h1>
   </div>
 )
}
   if(!pokemons.length&&!pokemon.name){
     return(
       <Cargando></Cargando>
     )
   }
   if(pokemons.length){
     const encontrado = pokemons.filter(p=>p.id.toString()===id)
     
       if (encontrado.length){
         console.log(encontrado)
         return (<div className="detail">
                <h1>{encontrado[0].name} </h1>
               <img src={encontrado[0].img} width="250" height="250" alt=""/>
                <p>Type:{encontrado[0].types[0].name}</p>
                <p>HP:{encontrado[0].hp}</p>
                <p>Attack:{encontrado[0].strength}</p>
                 <p>Defense:{encontrado[0].defending}</p>
                  <p>Speed:{encontrado[0].velocity}</p>
                  <p>Height:{encontrado[0].height}</p>
                  <p>Weight:{encontrado[0].weight}</p>
               
              </div>)
       }
   } else if(pokemon.name){
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
          
         </div>)
   } else if(id>898) {
           console.log("ole")
          return(
          <div className="detail">
             <h1>El ID no corresponde a un Pokemon disponible</h1>
            </div>
          )
        }







     
  // const encontrado = pokemons.filter(p=>p.id.toString()===id)
  //       if(pokemon.length>2&&encontrado.length){

  //         return (
  //           <div>
  //             encotrado
  //           </div>
  //         )
  //       }
  // if(pokemon.name){
  //     return (<div className="detail">
  //         <h1>{pokemon.name} </h1>
  //         <img src={pokemon.img} width="250" height="250" alt=""/>
  //         <p>Type:{pokemon.type}</p>
  //         <p>HP:{pokemon.hp}</p>
  //         <p>Attack:{pokemon.strength}</p>
  //         <p>Defense:{pokemon.defending}</p>
  //         <p>Speed:{pokemon.velocity}</p>
  //         <p>Height:{pokemon.height}</p>
  //         <p>Weight:{pokemon.weight}</p>
        
  //     </div>)}
  //     else if(encontrado.length<0) {
  //       console.log("ole")
  //       return(
  //         <div className="detail">
  //           <h1>El ID no corresponde a un Pokemon disponible</h1>
  //         </div>
  //       )
  //     }
  
}

export default Pokemon