import { Link } from "react-router-dom"

export default function Navbar ({id}){

    return(
        <nav className="navbar">
                <Link className="navbar-links" to={`/`}>All Raffles</Link>
                <Link className="navbar-links" to={`/raffles/${id}`}>Register</Link>
                <Link className="navbar-links" to={`/raffles/${id}/participants`}>Participants</Link>
                <Link className="navbar-links" to={`/raffles/${id}/winner`}>Pick Winner</Link>
        </nav>
    )
    
}