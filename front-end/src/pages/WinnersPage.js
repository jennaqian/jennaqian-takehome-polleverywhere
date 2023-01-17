import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";

export default function WinnersPage (){
    const {id} = useParams()
    return(
        <div>
            <Navbar id={id}/>
        </div>
    )
}