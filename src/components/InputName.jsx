import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeName } from "../store/slices/name.slice";
import img from '../assets/R.png'


const InputName = () => {
  const [userName, setUserName] = useState("")

  const navigate = useNavigate()

  const dispatch = useDispatch();

  const enterName = () => {
    dispatch(changeName(userName))
    navigate('/pokedex')
  }

  return (
    <div className="pageInitial">
      <div className="greeting">
        <h3 >Hello trainer!</h3>
        <img src={img} alt="" className="imgInitial" />
      </div>
      <h6 className="greetingInitial">Give me your name to start </h6>
      <div className="enterName">
        <input className="inputInitial"
          type="text"
          onChange={e => setUserName(e.target.value)}
          value={userName} />
        <button className="buttonInitial" onClick={enterName}><i className="fa-solid fa-paper-plane"></i></button>
      </div>

    </div>
  );
};

export default InputName;
