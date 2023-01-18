import NewRaffleForm from "../components/NewRaffleForm"
import Raffles from "../components/Raffles.js"
import { useState } from "react"

export default function Home (){
    let [newRaffleCreated, setNewRaffleCreated] = useState(false)

    return(
        <div className="home-page">
            <NewRaffleForm setNewRaffleCreated = {setNewRaffleCreated}/>
            <Raffles newRaffleCreated={newRaffleCreated} setNewRaffleCreated ={setNewRaffleCreated}/>
        </div>
    )
}