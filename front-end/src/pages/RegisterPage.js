import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useState } from "react";
import axios from "axios";
// import { ToastContainer, toast } from 'react-toastify';

const API = process.env.REACT_APP_API_URL

export default function RegisterPage (){
    const {id} = useParams();
    const navigate = useNavigate();

    const [participant, setParticipant] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
    });

    const [posted, setPosted] = useState(true)

    const handleTextChange = (e) => {
        setParticipant({...participant, [e.target.id]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(`${API}/raffles/${id}/participants`, participant)
            .then((res) => {
                if(res.data.email){
                    setPosted(true)
                    navigate(`/raffles/${id}/participants`)
                }else {
                    setPosted(false)
                }
                // res.data.email ? toast("Successful, please head over to participants page"): toast("Please try again, registration failed!")
            })
    }

    const handleReset = ()=> {
        setParticipant({
            fname: "",
            lname: "",
            email: "",
            phone: "",
        })
        setPosted(true)
    }

    const {fname, lname, email, phone} = participant;

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

                <label htmlFor="phone">Phone: </label>
                <input type="number" id="phone" value={phone} onChange={handleTextChange} />

                <button>Submit</button>
                <button onClick={handleReset}>Reset</button>
            </form>

            {posted ? null: <h3>Please try again!</h3>}
            {/* <ToastContainer position="bottom-center" /> */}
        </div>
    )
}