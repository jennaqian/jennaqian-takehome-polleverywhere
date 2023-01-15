import axios from "axios";
import { useEffect, useState } from "react";
import Raffle from "../components/Raffle.js";

const API = process.env.REACT_APP_API_URL;

export default function Raffles() {
    const [raffles, setRaffles] = useState([]);

    useEffect(()=> {
        axios.get(`${API}/raffles`)
            .then((res) => {
                let raffleList = res.data.map((elem) => {
                    return {rname: elem.rname, date_created: elem.date_created}
                })
               setRaffles(raffleList);
            })
    },[]);

  return (
    <div>
      <h2>All Raffles:</h2>
      {raffles.map((elem,i) => <Raffle rname = {elem.rname} date_created = {elem.date_created} key={i}/>)}
    </div>
  );
}
