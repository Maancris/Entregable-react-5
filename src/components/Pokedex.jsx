import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DrewPoke from './DrewPoke';



const Pokedex = () => {

    const pokename = useSelector(state => state.name)
    const [pokedex, setPokedex] = useState([])
    const [pokeName, setPokeName] = useState("")
    const [locations, setLocations] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/')
            .then(res => setPokedex(res.data.results))

        axios.get('https://pokeapi.co/api/v2/type/')
            .then(res => setLocations(res.data.results))
    }, [])


    const sarchPoke = () => {
        navigate(`/pokedex/${pokeName.toLowerCase()}`)
    }

    const filterType = (e) => {
        const url = e.target.value
        axios.get(url)
            .then(res => setPokedex(res.data.pokemon))
    }
    console.log(pokedex)

    return (
        <div className='pokedex'>
            <h1> Pokedex </h1>
            <p className='welcome'> Welcome {pokename}, here you can favorite pokemon </p>
            <div className='pokeName'>
                <input
                    className='inputPokedex'
                    type="text"
                    placeholder='Serch poke'
                    value={pokeName}
                    onChange={e => setPokeName(e.target.value)}
                />
                <button className='buttonPokedex' onClick={sarchPoke}>Search</button>

                <select className='selectPokedex' onChange={filterType} name="" id="">
                    {locations.map(location => (
                        <option className='optionPokedex'
                            value={location.url}
                            key={location.name}
                        >
                            {location.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className='pokeCard'>
                {pokedex.map((poke) => (

                    <DrewPoke
                   
                        url={poke.url ? poke.url : poke.pokemon?.url}
                        key={poke.url ? poke.url : poke.pokemon?.url}
                    />
                ))
                }
            </div>

        </div>

    )
}
export default Pokedex;