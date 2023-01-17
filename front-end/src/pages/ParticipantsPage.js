import Navbar from "../components/Navbar";
import Participant from "../components/Participant.js"
import { useParams} from "react-router-dom";
import {useState, useEffect } from "react"
import axios from "axios"

const API = process.env.REACT_APP_API_URL

export default function ParticipantsPage (){

    const [participants, setParticipants] = useState([]);

    let {id} = useParams();
    useEffect(()=> {
        axios.get(`${API}/raffles/${id}/participants`)
            .then((res)=> setParticipants(res.data))
            
    },[]);


    return(
        <div>
            <Navbar id={id}/>
            <h2>Participants: {participants.length} total</h2>
            <input placeholder="Search Here!"></input>

            <ul>
                {participants.map(elem=> <Participant pId={elem.id} fname={elem.fname} lname={elem.lname} email={elem.email}/>)} 
            </ul>
        </div>
    )
}