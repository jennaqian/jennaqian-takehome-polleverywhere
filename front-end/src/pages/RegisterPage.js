import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const API = process.env.REACT_APP_API_URL

export default function RegisterPage (){
    const {id} = useParams();

    return(
        <div>
        <Navbar id={id}/>
        <p>Registtttttttraa</p>
        </div>
    )
}