import React from "react";
import './cards.css';
import {Link} from 'react-router-dom';
// import {getallpokemons} from '../actions/actions'
// import {useDispatch, useSelector} from 'react-redux'



function Cards ({pokemons}){
     console.log(pokemons.length)



  
  
          return(<div className="container">
    {pokemons && 
    pokemons.map(r=>{ if(typeof r.id!== 'number'){
      return (
        <div className='card'> 
        <img src={r.img} width="80" height="80" alt=""/>
        <Link to={`/pokemons/${r.id} `}>
        <p>{r.name}</p>
        </Link>
        <p>{r.id}</p>
        <p>{r.types[0].name}</p>
        </div>
     )
    }
      
      return (
        <div className='card'> 
        <img src={r.img} width="80" height="80" alt=""/>
        <Link to={`/pokemons/${r.id} `}>
        <p>{r.name}</p>
        </Link>
        <p>{r.id}</p>
        <p>{r.type}</p>
        </div>
     )

      
      
    
    })
  }
</div>)
}

export default Cards