import React, {useEffect,useState,useCallback} from "react";
import {getallpokemons,gettype,order} from '../actions/actions'
import {useDispatch, useSelector} from 'react-redux'
import Cargando from './cargando'
import Cards from './cards'
import './allpokemons.css'
import {NavLink} from 'react-router-dom';

  function Allpokemons(){
    const dispatch = useDispatch()
    let pokemons =  useSelector(state => state.pokemons)
    
    let [poke,setpoke]=useState([])
    let [message,setmessage]=useState('')
    let [filtrados,setfiltrados]=useState(pokemons)
    const [current,setcurrent]=useState(0)
    const [search,setsearch]=useState('')
      useEffect(() =>{
          dispatch(getallpokemons())
          dispatch(gettype())
          
          
         
        },[dispatch])
        
        let types=  useSelector(state => state.types)
        let arr =[]
        let items = ()=>{
          if(filtrados.length){
            console.log('filtrados')
            if(current>0 && filtrados.length<12){setcurrent(0)}
            arr = filtrados}
           else if (poke.length){
             console.log('poke')
             arr= poke
           } 
          else {arr = pokemons}
          console.log(arr)
          return arr.slice(current, current + 12)

        }
        const next=()=>{
          console.log(items())
          if (arr.length>current + 12){
            console.log('next')
            setcurrent(current+12)
          }
          else return
        }
        const prev=()=>{
          if (!current<=0){
          setcurrent(current - 12)}
        }
        const onsearch = ({target})=> {
         
          setsearch(target.value)
        }
        const redirect = ()=>{
          console.log('redirect')
            window.location = `http://localhost:3000/pokemons/search/${search}`;
         
        }

        const orderby =(e)=>{
          let ordenado 
          if (filtrados.length){
            if(e.target.value==='id decreciente'){ordenado= [...filtrados.sort((a,b)=> b.id - a.id)];}
            if(e.target.value==='id creciente'){ordenado= [...filtrados.sort((a,b)=> a.id - b.id)];}
            if(e.target.value==='attack creciente'){ordenado= [...filtrados.sort((a,b)=> a.strength<b.strength?1 : -1)];}
            if(e.target.value==='attack decreciente'){ordenado= [...filtrados.sort((a,b)=>b.strength<a.strength?1 : -1)];}
            if(e.target.value==='orden alfabetico'){ordenado= [...filtrados.sort((a,b)=> a.name > b.name ? 1 : -1)];}
            console.log(ordenado)
            if(ordenado.length){
            setpoke(ordenado)}
          }else {
            if(e.target.value==='id decreciente'){ordenado= [...pokemons.sort((a,b)=> b.id - a.id)];}
            if(e.target.value==='id creciente'){ordenado= [...pokemons.sort((a,b)=> a.id - b.id)];}
            if(e.target.value==='attack creciente'){ordenado= [...pokemons.sort((a,b)=> a.strength<b.strength?1 : -1)];}
            if(e.target.value==='attack decreciente'){ordenado= [...pokemons.sort((a,b)=>b.strength<a.strength?1 : -1)];}
            if(e.target.value==='orden alfabetico'){ordenado= [...pokemons.sort((a,b)=> a.name > b.name ? 1 : -1)];}
            console.log(ordenado)
            if(ordenado.length){
            setpoke(ordenado)}
          }

           
         }
       
        


        const filterbytype = (e)=>{
          const valor=e.target.value
          let filtrados =[]
           if(valor==='todos') return setfiltrados(pokemons)
           if(valor==='creados'){
             filtrados= pokemons.filter(e => typeof e.id!='number')
           }
              pokemons.map(e=>{
              if(typeof e.id!== 'number'){
                console.log(e)
                if(e.types){
                  
                }
                if(e.types){

                  e.types.map(t=>{if(t.name===valor){ filtrados.push(e)}})
                }
              
              }else{
                if(e.type===valor){ filtrados.push(e)}
              }
              
              })
              console.log(filtrados)
              if(filtrados.length){
              setfiltrados(filtrados)
              setmessage('')
             } else setmessage('No hay pokemons disponibles')
        }

        if(!pokemons.length){
          return(
          <Cargando/>
        )}    
     else if (items().length){return(
       <div className='container' key={5}>
         <div className='filtros' key={6}>
         <button className='boton' onClick={()=>prev()} ><span>Prev</span></button>
         <button className="boton" onClick={()=>next()}><span>Next</span></button>
            
            <input  className='input' type='submit' value='id decreciente' onClick={orderby} />
            <input  className='input' type='submit' value='id creciente' onClick={orderby} />
            <input  className='input' type='submit' value='attack decreciente' onClick={orderby} />
            <input   className='input'type='submit' value='attack creciente' onClick={orderby} />
            <input   className='input'type='submit' value='orden alfabetico' onClick={orderby} />
          
          
              
          

         <input  className='buscar'type="text" placeholder="Search..." value={search} onChange={onsearch}/><input className='input' type='submit' value='Buscar' onClick={redirect} />
          
  
        
          
             <select className='input' name="typos" id="" onChange={filterbytype}>
               <option value='todos'>Todos</option>
               <option value='creados'>Creados</option>
               {types.map((type) => (
                                <option value={type.name}>
                                    {type.name}
                                </option>
                            ))}
             </select>
             
           
           <NavLink  className='link' to={'/create'}>Crear pokemon</NavLink>
           </div>
           { message.length?alert('No hay pokemons disponibles'):null
           }
           <Cards pokemons={items()}  ></Cards>
         
         
       </div>
     )}
     
}

export default Allpokemons;