import React, {useEffect,useState} from "react";
import {getallpokemons,gettype} from '../actions/actions'
import {useDispatch, useSelector} from 'react-redux'
import Cargando from './cargando'
import Cards from './cards'
import './allpokemons.css'

  function Allpokemons(){
    const dispatch = useDispatch()
    let pokemons =  useSelector(state => state.pokemons)
    
    let [poke,setpoke]=useState(pokemons)
    let [filtrados,setfiltrados]=useState(pokemons)
    const [current,setcurrent]=useState(0)
    const [search,setsearch]=useState('')
      useEffect(() =>{
          dispatch(getallpokemons())
          dispatch(gettype())
          
          
         
        },[dispatch])
        useEffect(() =>setfiltrados(pokemons))
        let types=  useSelector(state => state.types)
        let items = ()=>{
          if(filtrados.length){
            console.log('aca')
            const busqueda = filtrados.filter(item => item.name.includes(search))
            return busqueda.slice(current, current + 12)}
          if(poke.length){
            const busqueda = poke.filter(item => item.name.includes(search))
          return busqueda.slice(current, current + 12)
          }
          if(!search.length){
          return pokemons.slice(current, current + 12)}
          else {
          const busqueda = pokemons.filter(item => item.name.includes(search))
          return busqueda.slice(current, current + 12)}

        }
        const next=()=>{
          if(filtrados.length>current + 12){
            console.log('next filtrados')
            setcurrent(current + 12)
          }else{return}
        }
        const prev=()=>{
          if (!current<=0){
          setcurrent(current - 12)}
        }
        const onsearch = ({target})=> {
          setcurrent(0)
          setsearch(target.value)
        }
        const orderby = async(e)=>{
           console.log(e.target.value)
          switch(e.target.value){
           case 'id decreciente': setpoke(...pokemons.sort((a,b)=>( b.id)-(a.id)));
                  break;
           case 'id creciente':setpoke(...pokemons.sort((a,b)=>( a.id)-(b.id)));
           break;
           case 'HP decreciente':setpoke(...pokemons.sort((a,b)=>( b.hp)-(a.hp)));
           break;
           case 'HP creciente':setpoke(...pokemons.sort((a,b)=>( a.hp)-(b.hp)));
           break
           default: setpoke(pokemons)

          }}
        const filterbytype =async (e)=>{
          const valor=e.target.value
           if(valor==='todos') return setfiltrados(pokemons)
           let filtrados =[]
             await pokemons.map(e=>{
              if(typeof e.id!== 'number'){
                if(e.types[0].name===valor){ filtrados.push(e)}
              }else{
                if(e.type===valor){ filtrados.push(e)}
              }
              
              })
              console.log(filtrados)
              setfiltrados(filtrados)
        }

        if(!pokemons.length){
          return(
          <Cargando/>
        )}    
     else if (items().length){return(
       <div className='container'>
         <div className='filtros'>
         <button onClick={prev} >prev</button>
         <button onClick={next}>next</button>
      
          Metodos de ordenamiento:{
            <div  className='filtros'>
            <input type='submit' value='id decreciente' onClick={orderby} />
            <input type='submit' value='id creciente' onClick={orderby} />
            <input type='submit' value='HP decreciente' onClick={orderby} />
            <input type='submit' value='HP creciente' onClick={orderby} />
          </div>
          }
         <input type="text" placeholder="Search..." value={search} onChange={onsearch}/>
         Mostrar los tipo:{
           <div className='filtros'>
             <select name="typos" id="" onChange={filterbytype}>
               <option value='todos'>Todos</option>
               {types.map((type) => (
                                <option value={type.name}>
                                    {type.name}
                                </option>
                            ))}
             </select>
             
           </div>
         }</div>
         <Cards pokemons={items()}  ></Cards>
       </div>
     )}
     else{return(
       <div> 
         <input type="submit" onclick={setsearch('')}>volver</input>
       </div>
     )}
}

export default Allpokemons;