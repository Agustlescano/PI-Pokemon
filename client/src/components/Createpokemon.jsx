import React ,{useEffect,useState} from "react";
import {createpokemon,gettype} from "../actions/actions"
import {useDispatch, useSelector} from 'react-redux'
import {NavLink} from 'react-router-dom';
import './create.css';


function Createpokemons(){
    const dispatch = useDispatch()
    let arreglodetipos = []
    useEffect(() =>{
        dispatch(gettype())
      },[])
      const tipos = useSelector(state => state.types)
     
    const [input,setInput] = useState({
            name:'',
            Health:0,
            strength:0,
            defending:0,
            velocity:0,
            height:0,
            weight:0,
            img:'',
            types: arreglodetipos
    })
    const [errors,seterrors] = useState({})
    function error(input) {
        let errores={}
    
        if (!input.name) {
            errores.name ='name is required'
        }
        if (!/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(input.img)){errores.img = 'URL is invalid'}
        console.log(errores)
        return errores
    }
    function onChange(e) {
        seterrors(error({
            ...input,
            [e.target.name]:e.target.value
        }))
        setInput({
            ...input,
            [e.target.name]:e.target.value
        })
    }
    function handleSubmit(e){
        e.preventDefault()
        if (!errors.name){
        createpokemon(input)}else alert('faltan campos obligatorios')
    }
    function handletype(e){
        
        setInput({
            ...input,
            types:[...input.types,e.target.value]
        })
    }

    return(
        <div className='create' >
            <form >
            <div >
        <label htmlFor="name">Name:</label>
        <input type="text" name='name' onChange={onChange}/></div>
        <br />
        <div >
        <label htmlFor="Health">Health:</label>
        <input type="number" name='Health' onChange={onChange}/></div>
        <br />
        <div >
        <label htmlFor="strength">Strength:</label>
        <input type="number" name='strength' onChange={onChange}/></div>
        <br />
        <div >
        <label htmlFor="defending">Defending:</label>
        <input type="number" name='defending'onChange={onChange}/></div>
        <br />
        <div >
        <label htmlFor="velocity">Velocity:</label>
        <input type="number" name='velocity'onChange={onChange}/></div>
        <br />
        <div >
        <label htmlFor="height">Height:</label>
        <input type="number" name='height'onChange={onChange}/></div>
        <br />
        <div >
        <label htmlFor="weight">Weight:</label>
        <input type="number" name='weight' onChange={onChange}/></div>
        <br />
        <div >
        <label htmlFor="img">Link to image:</label>
        <input type='text' name='img' onChange={onChange}/>
        </div >
        <br />
        <select  type="submit" name="types" multiple onChange={handletype} required>
            <option value='0' disabled >select type:</option>
               {tipos.map((type) => <option value={type.name}>{type.name} </option>
                            )}
             </select>
             <br />
        <input className="input" type="submit" onClick={handleSubmit}/>
        </form>
        <NavLink className='Link' to='/pokemons'>Volver</NavLink>
        </div>
    )
}


export default Createpokemons