import { useState } from "react";
import axios from "axios"
import {useNavigate} from "react-router-dom"

const API = process.env.REACT_APP_API_URL;

export default function NewRaffleForm({setNewRaffleCreated}) {
  const navigate = useNavigate()
  const [raffle, setRaffle] = useState({
    rname: "",
    secret_token: "",
  });

  const handleTextChange = (e) => {
    setRaffle({...raffle, [e.target.id]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${API}/raffles`, raffle)
        .then(
            setRaffle({
              rname: "",
              secret_token: "",
            }),
            setNewRaffleCreated(true),
            navigate(`/`)
        )
        .catch(error => console.log(error))
  }

  const { rname, secret_token } = raffle;

  return (
    <form onSubmit={handleSubmit} className="new-raffle-form">
      <h1>New Raffle:</h1>

      <div className="new-raffle-form-input">
        <div className="input-div">
          <label htmlFor="rname">Raffle Name: *</label>
          <input
            id="rname"
            type="text"
            value={rname}
            placeholder="Enter raffle name..."
            onChange={handleTextChange}
            required
          />
        </div>

        <div className="input-div">
          <label htmlFor="secret_token">Raffle Secret Token: *</label>
          <input
            id="secret_token"
            type="text"
            value={secret_token}
            placeholder="Enter token..."
            onChange={handleTextChange}
            required
          />
        </div>
      </div>

      <h4>
        *You must remember the Raffle Token because it will be asked when picking
        a winner*
      </h4>

      <button type="submit">Create New Raffle</button>
    </form>
  );
}
