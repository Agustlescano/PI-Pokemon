import React from "react";
import './cards.css';
import {Link} from 'react-router-dom';
// import {getallpokemons} from '../actions/actions'
// import {useDispatch, useSelector} from 'react-redux'



function Cards ({pokemons}){
     console.log(pokemons.length)

     const redirect = (id)=>{
      window.location = `http://localhost:3000/pokemons/${id.target.value}`;
     }

  
  
          return(<div className="container">
    {pokemons && 
    pokemons.map(r=>{ if(typeof r.id=== 'string'){
      return (
        <div className='card' key={r.id}> 
        <img src={r.img} width="80" height="80" alt=""/>
        <p>{r.name}</p>
        <p>{r.types[0].name}</p>
        <input type='submit' value={r.id} onClick={redirect} />
        </div>
     )
    }
      
      return (
        <div className='card' key={r.id}> 
        <img src={r.img} width="80" height="80" alt=""/>
        <p>{r.name}</p>
        <p>{r.type}</p>
        <input type='submit' value={r.id} onClick={redirect} />
        </div>
     )

      
      
    
    })
  }
</div>)
}

export default Cards