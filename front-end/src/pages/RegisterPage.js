import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useState } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API_URL

export default function RegisterPage (){
    const {id} = useParams();
    const [participant, setParticipant] = useState({
        fname: "",
        lname: "",
        email: "",
    })

    const handleTextChange = (e) => {
        setParticipant({...participant, [e.target.id]: [e.target.value]})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(`${API}/raffles/${id}/participants`, participant)
            .then((res) => console.log(res))
    }

    const {fname, lname, email} = participant;

    return(
        <div>

            <Navbar id={id}/>
            <h2>Register to participate in the Raffle!</h2>

            <form onSubmit={handleSubmit}>
                <label htmlFor="fname">First Name: </label>
                <input type="text" id="fname" value={fname} onChange={handleTextChange} required/>

                <label htmlFor="lname">Last Name: </label>
                <input type="text" id="lname" value={lname} onChange={handleTextChange} required/>

                <label htmlFor="email">Email: </label>
                <input type="text" id="email" value={email} onChange={handleTextChange} required/>

                <button>Submit</button>
                <button>Reset</button>
            </form>
        </div>
    )
}