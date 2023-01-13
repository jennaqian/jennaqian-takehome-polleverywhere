import { useState } from "react";
import axios from "axios"
import { Navigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;
// console.log(API)

export default function NewRaffleForm() {
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
        .then(res => {
            // console.log(res)
            
        })
        .catch(error => console.log(error))
  }

  const { rname, secret_token } = raffle;

  return (
    <form onSubmit={handleSubmit}>
      <h1>New Raffle:</h1>

      <div>
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

      <div>
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

      <h3>
        You must remember the Raffle Token because it will be asked when picking
        a winner
      </h3>

      <button type="submit">Create New Raffle</button>
    </form>
  );
}