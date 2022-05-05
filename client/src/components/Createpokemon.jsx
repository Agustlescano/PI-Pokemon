import React ,{useState} from "react";
import {createpokemon} from "../actions/actions"



function Createpokemons(){
    const [input,setInput] = useState({
            name:'',
            Health:'',
            strength:'',
            defending:'',
            velocity:'',
            height:'',
            weight:''
    })
    function onChange(e) {
        console.log(e)
        setInput({
            ...input,
            [e.target.name]:e.target.value
        })
    }
    function handleSubmit(){
        createpokemon(input)
    }

    return(
        <div className='create'>
        name:<input type="text" name='name' onChange={onChange}/>
        Health:<input type="text" name='Health'onChange={onChange}/>
        Strength:<input type="text" name='strength'onChange={onChange}/>
        Defending:<input type="text" name='defending'onChange={onChange}/>
        velocity:<input type="text" name='velocity'onChange={onChange}/>
        Height:<input type="text" name='height' onChange={onChange}/>
        Weight:<input type="text" name='weight' onChange={onChange}/>
        <input type="submit" onClick={handleSubmit} />

        </div>
    )
}


export default Createpokemons