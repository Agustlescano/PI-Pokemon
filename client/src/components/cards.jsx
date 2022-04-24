import React from "react";
import './cards.css';
// import {getallpokemons} from '../actions/actions'
// import {useDispatch, useSelector} from 'react-redux'



function Cards ({pokemons}){
     console.log(pokemons.length)



  
  
          return(<div className="container">
    {pokemons && 
    pokemons.map(r=>{ 
      return (
        <div className='card'> 
        <img src={r.img} width="80" height="80" alt=""/>
        <p>{r.name}</p>
        <p>{r.id}</p>
        </div>
     )

      
      
    
    })
  }
</div>)
}

export default Cards