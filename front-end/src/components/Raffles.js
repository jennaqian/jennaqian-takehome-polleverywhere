import axios from "axios";
import { useEffect, useState } from "react";
import Raffle from "../components/Raffle.js";

const API = process.env.REACT_APP_API_URL;

export default function Raffles({newRaffleCreated, setNewRaffleCreated}) {
    const [raffles, setRaffles] = useState([]);

    useEffect(()=> {
        axios.get(`${API}/raffles`)
            .then((res) => {
                let raffleList = res.data.map((elem) => {
                    return {id: elem.id, rname: elem.rname, date_created: elem.date_created}
                })
               setRaffles(raffleList);
            });
            return () =>{
              setNewRaffleCreated(false)
            }
    },[newRaffleCreated]);

  return (
    <div className="all-raffles">
      <h2>All Raffles:</h2>
      {raffles.map((elem,i) => <Raffle id = {elem.id} rname = {elem.rname} date_created = {elem.date_created} key={i}/>)}
    </div>
  );
}
