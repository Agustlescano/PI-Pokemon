import React, {useEffect,useState} from "react";
import {getallpokemons} from '../actions/actions'
import {useDispatch, useSelector} from 'react-redux'
import Cargando from './cargando'
import Cards from './cards'
import './allpokemons.css'

function Allpokemons(){
    const dispatch = useDispatch()
    let pokemons = useSelector(state => state.pokemons)
    let items_pagina=12;
    const [items,setitems]=useState([...pokemons].splice(0, items_pagina))
    const [current,setcurrent]=useState(1)
    
    console.log(items)
   
      useEffect(() =>{
          dispatch(getallpokemons())
         
        },[dispatch])


          const prev=()=>{
            const prev = current -1;
            if (prev<0) return
            const first=prev * items_pagina
            setitems([...pokemons].splice(first, items_pagina))
           setcurrent(prev)

            console.log('prev')
          }
          const next=()=>{
           const max=pokemons.length
           const next = current+1
           const first=current * items_pagina
         
         
           setitems([...pokemons].splice(first, items_pagina))
           setcurrent(next)
          
            console.log('next')
          }

        
        if(!pokemons.length){
          return(
          <Cargando></Cargando>
        )}    
     else if (items.length){return(
       <div className='container'>
         <button onClick={prev} >prev</button>
         <button onClick={next}>next</button>
         <Cards pokemons={items}  ></Cards>
       </div>
     )}
     else{return(
      <div className='container'>
        <button onClick={prev} >prev</button>
        <button onClick={next}>next</button>
        <Cards pokemons={[...pokemons].splice(0, items_pagina)}  ></Cards>
      </div>
    )}
}

export default Allpokemons;