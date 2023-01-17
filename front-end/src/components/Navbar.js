import { Link } from "react-router-dom"

export default function Navbar ({id}){

    return(
        <nav>
                <Link to={`/`}>All Raffles</Link>
                <Link to={`/raffles/${id}`}>Register</Link>
                <Link to={`/raffles/${id}/participants`}>Participants</Link>
                <Link to={`/raffles/${id}/winner`}>Pick Winner</Link>
        </nav>
    )
    
}