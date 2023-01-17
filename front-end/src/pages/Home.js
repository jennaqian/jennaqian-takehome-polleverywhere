import NewRaffleForm from "../components/NewRaffleForm"
import Raffles from "../components/Raffles.js"

export default function Home (){
    return(
        <div>
            <NewRaffleForm />
            <Raffles />
        </div>
    )
}