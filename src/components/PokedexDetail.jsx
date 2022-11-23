import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import imgpo from '../assets/RA.png'

const PokedexDetail = () => {
  const [pok, setPok] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => setPok(res.data))
  }, [id])
  console.log(pok)
  return (
    <div className='pokeDetail'>
      <img src={imgpo} alt="" className="imgDetail" />
      <img src={pok.sprites?.other?.['official-artwork'].front_default} alt=""
        className="pokemonFirst" />
      <h1 >{pok.name}</h1>
      <div className="dad">
        <div className="size">
          <p>Height: <b>{pok.height}</b></p>
          <p>Weight: <b>{pok.weight}</b></p>
        </div>

        <div className="abiliti">
          <h3>Abilities:</h3>
          <p className="paragraph">
            <b>- {pok.abilities?.[0].ability.name}</b> <br />
            <b>- {pok.abilities?.[1].ability.name}</b>
          </p>
        </div>
      </div>

    </div>
  );
};

export default PokedexDetail;
