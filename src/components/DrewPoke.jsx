import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



const DrewPoke = ({url}) => {
    
 const [character , setCharacter] = useState ({})

 useEffect (() => {
       axios.get (url)
       .then (res => setCharacter (res.data))
 },[])
	//  console.log (character)

	return(
        <ul className='pokeLink'>
        <Link  to ={`/pokedex/${character.id}`}>
        <div className='pokemons'>  
        <img src={character.sprites?.other?.home.front_default} alt="" className='pokeTemplate' />     
        <div className='pokeTemplate'>{character.species?.name}</div>
        
        </div> 
        </Link>
        </ul>
    )
    }
export default DrewPoke;